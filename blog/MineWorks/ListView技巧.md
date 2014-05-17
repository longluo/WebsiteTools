



http://cyrilmottier.com/2012/02/16/listview-tips-tricks-5-enlarged-touchable-areas/




ListView Tips & Tricks #5: Enlarged Touchable Areas
FEB 16TH, 2012
Edit (02/24/12): Fix a potential NullPointerException in the removeDelegate(TouchDelegate) method of TouchDelegate

Some of you may wonder why I have decided to publish a new article in the ListView Tips & Tricks series. Indeed, in the last article, I mentioned the fourth post was the latest of the series. Actually, at the time of the writing it was true but I recently came up with a new topic! As a result, I will stop saying such and such an article is the final of the series and I will never be wrong again!

I also would like to give you a quick recap of the topics we have already covered (please note it is not necessary - but highly encouraged - to read the previous tips in order to fully understand the article below):

ListView Tips & Tricks #1: Handling emptiness
ListView Tips & Tricks #2: Sectioning your ListView
ListView Tips & Tricks #3: Create fancy ListViews
ListView Tips & Tricks #4: Add several clickable areas
Moreover, all of those articles are based on some snippets of code that have been all gathered in a single Android application. You can download/clone the source code of this application on GitHub using the following link:

http://github.com/cyrilmottier/ListViewTipsAndTricks

Note: This article is mainly dedicated to ListViews. The main reason behind this is enlarging touchable areas if often necessary in itemviews containing lots of controls (Button, CheckBox, etc.). Please remember the trick explained in this article doesn’t only apply to ListViews. It can be used everywhere in the system as long as you use Views … which, I guess, is often the case when developing an application.

In the previous article of this ListView Tips & Tricks series, we have discovered several way to enlarge touchables areas. The main purpose of those techniques is to ensure the user correctly and easily access to secondary actions (star an item, select an item, etc.). Ensuring your users don’t get frustrated because of their actions are not being recognized is very important. Chances are high that an angry user will rate your application with a bad comment or worse uninstall the application.

A great example of a easy-to-interact-with application is the new GMail application. Personally, I love using it because you can navigate through the sections seamlessly and flawlessly. The UI is clean and responds precisely, which has not always been the case… Even if the select and star controls are pretty tiny (graphically speaking), they are easy to check/uncheck. To sum up, the general design remains clean and simple while the size of the controls does not influence the correctness of user interactions. The screenshot below shows an itemview from the new GMail application:



More than being a reference to me, the GMail application is also highly featured on the new Android Design website - which, by the way, I highly recommend you to read. For instance, the Android design team decided to use the GMail application to give an explanation of how to create contextual icons on Android. Go to the ‘Small / Contextual Icons’ of the Iconography section to read the recommendations. The actual problem of this guideline is it only describes iconography. Knowing a touchable area has to be at least as big as a 30x30dp square and Google requires a 16x16dp icon brings us to a big question: How to reconciliate designers with ergonomists ?

My previous ListView Tips & Tricks article gave us some advices:

Adding padding to controllable Views
Adding a transparent safe-frame to all images used in controls
Enlarging view bounds using fill_parent or manually setting a dimension
All these techniques are working perfectly and are pretty familiar to developers. Unfortunately they also bring you several issues as these methods don’t let you have a precise control over the touchable areas. For instance, the first technique involves modifying the general layout of your itemviews (padding has an effect on how Views are laid out) and may not let you entirely fill vertically the parent. The second technique makes reusing the image fairly difficult. There’s a good chance the safe-frame won’t be necessary if the image is reused somewhere else. In other words, those techniques can be pretty hazardous to use and may not be your best option.

Fortunately, Android gives you an amazing way to enlarge touchable areas. The principle consists on forwarding MotionEvents (an object describing a touch) from a View’s rectangle area to another View. This can be done natively creating a TouchDelegate and attaching it to a View, the touches of which needing to be forwarded to another View (the delegate View). This class gives you a finer control over how MotionEvents are consumed. You can obviously have a look at the TouchDelegate documentation on the Android developer website. As usual, I will follow the “show me the code” path instead of procrastinating. We will simply develop a tiny application emulating GMail behavior. It will display a list of cheeses that can be independantly (un)selected and/or (un)starred. The screenshot below gives you an overview of the result we are targeting. The red rectangles define touchable areas that will (un)select the itemview. Blue rectangles describes the area allowing the user to (un)star the itemview:



On the screenshot below you can easily notice (especially on the left of the itemview) the touchable area overlaps the actual TextView bounds.

A custom View as itemview

Most of the time, UIs are based on XML layouts. This type of declaration if usually enough to create a UI. However, sometimes you may require a finer control over the View hierarchy: be notified the size of a View has changed, be notified a layout pass has been performed (starting from API 11, this is now possible from outside of a View using the OnLayoutChangeListener), etc. This is the main reason why I have decided to develop my own custom View for the purpose of this sample. The XML View hierarchy of our custom itemview is given below:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
<?xml version="1.0" encoding="utf-8"?>
<merge xmlns:android="http://schemas.android.com/apk/res/android" >

    <ImageButton
        android:id="@+id/btn_select"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_vertical"
        android:background="@null"
        android:src="@drawable/btn_check_off_normal" />

    <TextView
        android:id="@+id/content"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_gravity="center_vertical"
        android:layout_weight="1"
        android:ellipsize="end"
        android:paddingLeft="6dp"
        android:paddingRight="6dp"
        android:singleLine="true"
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <ImageButton
        android:id="@+id/btn_star"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_vertical"
        android:background="@null"
        android:src="@drawable/btn_star_off_normal" />

</merge>
The Java counterpart of our itemview is where all the magic happens as this is where TouchDelegates are set. The trick consists on listening to onLayout(boolean, int, int, int, int) calls and re-apply the correct TouchDelegate if the size of the itemview has changed (we suppose child Views cannot change their position/size if the parent keeps the same size)

LargeTouchableAreasView.java
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
package com.cyrilmottier.android.listviewtipsandtricks.widget;

import java.util.ArrayList;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Paint.Style;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.TouchDelegate;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.cyrilmottier.android.listviewtipsandtricks.R;
import com.cyrilmottier.android.listviewtipsandtricks.view.TouchDelegateGroup;

public class LargeTouchableAreasView extends LinearLayout {

    private static final int TOUCH_ADDITION = 20;
    private static final int COLOR_SELECT_AREA = Color.argb(50, 255, 0, 0);
    private static final int COLOR_STAR_AREA = Color.argb(50, 0, 0, 255);

    public interface OnLargeTouchableAreasListener {
        void onSelected(LargeTouchableAreasView view, boolean selected);

        void onStarred(LargeTouchableAreasView view, boolean starred);
    }

    private static class TouchDelegateRecord {
        public Rect rect;
        public int color;

        public TouchDelegateRecord(Rect _rect, int _color) {
            rect = _rect;
            color = _color;
        }
    }

    private final ArrayList<touchdelegaterecord> mTouchDelegateRecords = new ArrayList<largetouchableareasview.touchdelegaterecord>();
    private final Paint mPaint = new Paint();

    private ImageButton mSelectButton;
    private ImageButton mStarButton;
    private TextView mTextView;

    private TouchDelegateGroup mTouchDelegateGroup;
    private OnLargeTouchableAreasListener mOnLargeTouchableAreasListener;

    private int mTouchAddition;

    private boolean mIsStarred;
    private boolean mIsSelected;

    private int mPreviousWidth = -1;
    private int mPreviousHeight = -1;

    public LargeTouchableAreasView(Context context) {
        super(context);
        init(context);
    }

    public LargeTouchableAreasView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context);
    }

    private void init(Context context) {

        setOrientation(LinearLayout.HORIZONTAL);
        setDescendantFocusability(ViewGroup.FOCUS_BLOCK_DESCENDANTS);

        mTouchDelegateGroup = new TouchDelegateGroup(this);
        mPaint.setStyle(Style.FILL);

        final float density = context.getResources().getDisplayMetrics().density;
        mTouchAddition = (int) (density * TOUCH_ADDITION + 0.5f);

        LayoutInflater.from(context).inflate(R.layout.large_touchable_areas_view, this);
    }

    @Override
    protected void onFinishInflate() {
        super.onFinishInflate();

        mSelectButton = (ImageButton) findViewById(R.id.btn_select);
        mSelectButton.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                setItemViewSelected(!mIsSelected);
                if (mOnLargeTouchableAreasListener != null) {
                    mOnLargeTouchableAreasListener.onSelected(LargeTouchableAreasView.this, mIsSelected);
                }
            }
        });

        mStarButton = (ImageButton) findViewById(R.id.btn_star);
        mStarButton.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                setItemViewStarred(!mIsStarred);
                if (mOnLargeTouchableAreasListener != null) {
                    mOnLargeTouchableAreasListener.onStarred(LargeTouchableAreasView.this, mIsStarred);
                }
            }
        });

        mTextView = (TextView) findViewById(R.id.content);
    }

    @Override
    protected void onLayout(boolean changed, int l, int t, int r, int b) {
        super.onLayout(changed, l, t, r, b);

        final int width = r - l;
        final int height = b - t;

        if (width != mPreviousWidth || height != mPreviousHeight) {

            mPreviousWidth = width;
            mPreviousHeight = height;

            mTouchDelegateGroup.clearTouchDelegates();

            //@formatter:off
            addTouchDelegate(
                    new Rect(0, 0, mSelectButton.getWidth() + mTouchAddition, height),
                    COLOR_SELECT_AREA,
                    mSelectButton);

            addTouchDelegate(
                    new Rect(width - mStarButton.getWidth() - mTouchAddition, 0, width, height),
                    COLOR_STAR_AREA,
                    mStarButton);
            //@formatter:on

            setTouchDelegate(mTouchDelegateGroup);
        }
    }

    private void addTouchDelegate(Rect rect, int color, View delegateView) {
        mTouchDelegateGroup.addTouchDelegate(new TouchDelegate(rect, delegateView));
        mTouchDelegateRecords.add(new TouchDelegateRecord(rect, color));
    }

    @Override
    protected void dispatchDraw(Canvas canvas) {
        for (TouchDelegateRecord record : mTouchDelegateRecords) {
            mPaint.setColor(record.color);
            canvas.drawRect(record.rect, mPaint);
        }
        super.dispatchDraw(canvas);
    }

    public void setOnLargeTouchableAreasListener(OnLargeTouchableAreasListener listener) {
        mOnLargeTouchableAreasListener = listener;
    }

    public TextView getTextView() {
        return mTextView;
    }

    public void setItemViewSelected(boolean selected) {
        if (mIsSelected != selected) {
            mIsSelected = selected;
            mSelectButton.setImageResource(mIsSelected ? R.drawable.btn_check_on_normal : R.drawable.btn_check_off_normal);
        }
    }

    public void setItemViewStarred(boolean starred) {
        if (mIsStarred != starred) {
            mIsStarred = starred;
            mStarButton.setImageResource(mIsStarred ? R.drawable.btn_star_on_normal : R.drawable.btn_star_off_normal);
        }
    }
}
As explained in the fourth article of this series, I consider the CheckBox widget as badly implemented. To overcome all problems, I simply decided not to use it! The entire code emulates CheckBoxes using ImageButtons. Please note I made nothing to manage extra states (pressed, focused, etc.) because it was not the main purpose of this article. In production code, you should always ensure the appearance of a control changes depending on its current state.

One TouchDelegate, two TouchDelegates, three…

A View manages a single TouchDelegate. It other words, it means, by default, you can’t have several ‘delegation areas’ for a single View. To overcome this problem, I have created a very basic class called TouchDelegateGroup that is basically a TouchDelegate containing several TouchDelegates and forward MotionEvent to the correct one. I have to confess the implementation is pretty hacky (at least the constructor) but this is the only way to overcome the fact TouchDelegate is not an interface, has no no-arg constructor and does not manage null arguments. The code of the TouchDelegateGroup is given below:

TouchDelegateGroup.java
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
package com.cyrilmottier.android.listviewtipsandtricks.view;

import java.util.ArrayList;

import android.graphics.Rect;
import android.view.MotionEvent;
import android.view.TouchDelegate;
import android.view.View;

public class TouchDelegateGroup extends TouchDelegate {

    private static final Rect USELESS_HACKY_RECT = new Rect();

    private ArrayList<touchdelegate> mTouchDelegates;
    private TouchDelegate mCurrentTouchDelegate;

    public TouchDelegateGroup(View uselessHackyView) {
        // I know this is pretty hacky. Unfortunately there is no other way to
        // create a TouchDelegate containing TouchDelegates since TouchDelegate
        // is not an interface ...
        super(USELESS_HACKY_RECT, uselessHackyView);
    }

    public void addTouchDelegate(TouchDelegate touchDelegate) {
        if (mTouchDelegates == null) {
            mTouchDelegates = new ArrayList<touchdelegate>();
        }
        mTouchDelegates.add(touchDelegate);
    }

    public void removeTouchDelegate(TouchDelegate touchDelegate) {
        if (mTouchDelegates != null) {
            mTouchDelegates.remove(touchDelegate);
            if (mTouchDelegates.isEmpty()) {
                mTouchDelegates = null;
            }
        }
    }

    public void clearTouchDelegates() {
        if (mTouchDelegates != null) {
            mTouchDelegates.clear();
        }
        mCurrentTouchDelegate = null;
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {

        TouchDelegate delegate = null;

        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:
                if (mTouchDelegates != null) {
                    for (TouchDelegate touchDelegate : mTouchDelegates) {
                        if (touchDelegate != null) {
                            if (touchDelegate.onTouchEvent(event)) {
                                mCurrentTouchDelegate = touchDelegate;
                                return true;
                            }
                        }
                    }
                }
                break;

            case MotionEvent.ACTION_MOVE:
                delegate = mCurrentTouchDelegate;
                break;

            case MotionEvent.ACTION_CANCEL:
            case MotionEvent.ACTION_UP:
                delegate = mCurrentTouchDelegate;
                mCurrentTouchDelegate = null;
                break;
        }

        return delegate == null ? false : delegate.onTouchEvent(event);
    }

}
The most simple ListActivity ever

The code of the ListActivity is given below. As you may have noticed, it is really similar to the code we have written in the fourth article of this serie. Normally there is nothing new for you in here:

LargeTouchableAreasListActivity.java
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102

package com.cyrilmottier.android.listviewtipsandtricks;

import static com.cyrilmottier.android.listviewtipsandtricks.data.Cheeses.CHEESES;
import android.app.ListActivity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ListView;

import com.cyrilmottier.android.listviewtipsandtricks.widget.LargeTouchableAreasView;
import com.cyrilmottier.android.listviewtipsandtricks.widget.LargeTouchableAreasView.OnLargeTouchableAreasListener;

public class LargeTouchableAreasListActivity extends ListActivity {

    private static final String STAR_STATES = "listviewtipsandtricks:star_states";
    private static final String SELECTION_STATES = "listviewtipsandtricks:selection_states";

    private boolean[] mStarStates;
    private boolean[] mSelectionStates;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        LargeTouchableAreasAdapter adapter = new LargeTouchableAreasAdapter();

        if (savedInstanceState != null) {
            mStarStates = savedInstanceState.getBooleanArray(STAR_STATES);
            mSelectionStates = savedInstanceState.getBooleanArray(SELECTION_STATES);
        } else {
            mStarStates = new boolean[adapter.getCount()];
            mSelectionStates = new boolean[adapter.getCount()];
        }

        setListAdapter(adapter);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putBooleanArray(SELECTION_STATES, mSelectionStates);
        outState.putBooleanArray(STAR_STATES, mStarStates);
    }

    private class LargeTouchableAreasAdapter extends BaseAdapter {

        @Override
        public int getCount() {
            return CHEESES.length;
        }

        @Override
        public String getItem(int position) {
            return CHEESES[position];
        }

        @Override
        public long getItemId(int position) {
            return position;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {

            final LargeTouchableAreasView view;

            if (convertView == null) {
                view = (LargeTouchableAreasView) getLayoutInflater().inflate(R.layout.large_touchable_areas_item, parent, false);
                view.setOnLargeTouchableAreasListener(mOnLargeTouchableAreasListener);
            } else {
                view = (LargeTouchableAreasView) convertView;
            }

            view.setItemViewStarred(mStarStates[position]);
            view.setItemViewSelected(mSelectionStates[position]);
            view.getTextView().setText(getItem(position));

            return view;
        }
    }

    private OnLargeTouchableAreasListener mOnLargeTouchableAreasListener = new OnLargeTouchableAreasListener() {

        @Override
        public void onSelected(LargeTouchableAreasView view, boolean selected) {
            final int position = getListView().getPositionForView(view);
            if (position != ListView.INVALID_POSITION) {
                mSelectionStates[position] = selected;
            }
        }

        @Override
        public void onStarred(LargeTouchableAreasView view, boolean starred) {
            final int position = getListView().getPositionForView(view);
            if (position != ListView.INVALID_POSITION) {
                mStarStates[position] = starred;
            }
        }
    };
}
The R.layout.large_touchable_area_item is detailed below:
large_touchable_area_item.xml

	<?xml version="1.0" encoding="utf-8"?>
	<com.cyrilmottier.android.listviewtipsandtricks.widget.LargeTouchableAreasView xmlns:android="http://schemas.android.com/apk/res/android"
	    android:layout_width="fill_parent"
	    android:layout_height="wrap_content"
	    android:padding="6dp" />


Conclusion

As we have seen, MotionEvent delegation is fairly simple when using a TouchDelegate. The most difficult part is to determine when and how to set the bounds of the rectangular area that will forward MotionEvent to the delegate View. Always consider the work worth it. Having controls that the user can hardly interact with is the best way to frustrate your users. Only a few developers know about the TouchDelegate class and even less use it. And you? Did you know about the TouchDelegate class?












