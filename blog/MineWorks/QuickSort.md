
### ***By Long Luo***


package com.algorithms.sort;

public class QuickSort {

    /**
     *
     * http://ainixiaobao-99.blog.163.com/blog/static/1409888120084159263955/
     * 快速排序 ： 我对快速排序的理解 我们的while循环的作用是给标准元素(一般取a[low])找到一个合适的位置
     * 它前面的元素都大于它,它后面的元素都小于它。那具体是如何实现的呢？我们用俩个变量 i,j来 "卡"
     * 合适的位置，i,和j就像俩个监视器一样，i的移动保证,它一路走来 每个元素都是比temp小的，j的移动保证它一路走来都是比temp大的。
     * 刚开始的时候 就把要排序的元素保存到了temp中，而且整个过程都保存在temp里，这样就好像给数组打开了缺口(最左边的元素已经没什么用了可以被
     * 别的元素覆盖掉)从右端开始扫描数组，如果比temp大是应该的
     * 放过j--不用管很正常，一旦碰到比它大的东西这本来应该在它左边啊？对把它放到左边！放到那啊？刚才那个元素已经没用了就用它覆盖a
     * [i],这个元素比temp小已经比较了，i++，然后开始扫描数组的左端，如果比temp小是应该的，不用管
     * i++放过,反之就应该放到temp右边，同理a[j]已经保存到a[i]中了没什么用了，正好把a[i]覆盖掉a[j],
     * 这个元素比temp大已经比较了，所以j--， 我说过之所以能这样覆盖来覆盖去是因为，一开始
     * 数组就有一个空位，遇到的第一个小的覆盖掉原有数据，遇到的第一个大的覆盖掉上面那个位置，然后再遇到
     * 比它小的继续覆盖，总是覆盖上一个缺口，留下一个缺口，当i,j重合即卡住了temp的正确位置！ 在对另外的俩个子区间进行如上的排序！
     */
    public static void quickSort(int[] a, int low, int high) {
        int n = a.length;
        int i = low;
        int j = high;

        int temp = a[low];

        while (i < j) {

            // 必须从右边开始扫描，否则从左边开始扫描遇到一个比它大的元素时(左边不是有一个空位吗？但是放到左边肯定是不合适)
            // 应该放到右边，放到哪里呢，放到任何地方都会覆盖掉一个数据 这样没有利用上这个缺口 严重错误
            while (i < j && a[j] >= temp) {
                j--;// 放过
            }
            if (i < j) {
                a[i] = a[j];
                i++; // 放过，并开始左端循环
            }
            while (i < j && a[i] < temp) { // 注意 ：" < " 而不是
                                           // <=这个细节说明即使和temp相等也要放到它的后面这样保证了-在数值相同时
                                           // ，保持原有顺序的原则！
                i++;
            }
            if (i < j) {
                a[j] = a[i];
                j--;
            }
        }
        a[i] = temp;
        // 有可能i=low 如 :a[low]是最小的，一开始循环就一直j-- 一直减到了i ==j
        // 然后赋值(即它本来就应该在第一位),也有可能a[low]是最大的，一直i++到high。如果是这样就不用对那个子区间排序了，所以下面用if语句
        if (i > low) {
            quickSort(a, low, i - 1);
        }
        if (i < high) {
            quickSort(a, i + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] a = { -2, 67, 89, 308, 1299, 2008, -289, 90, 101, -34, 145, 93, 0, 2028, 713 };
        quickSort(a, 0, a.length - 1);
        print(a);
    }

    // 为了打印数组的方便 增加一个方法print()
    public static void print(int[] a) {
        int n = a.length;

        for (int i = 0; i < n; i++) {
            System.out.print(a[i] + "  ");

            if ((i + 1) % 5 == 0) {
                System.out.println();
            }
        }

        System.out.println();
    }
}











2014/8/12 16:55:23 


