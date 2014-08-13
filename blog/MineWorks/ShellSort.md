
### ***By Long Luo***






package com.algorithms.sort;

public class ShellSort {
    public static void main(String[] args) {
        System.out.println("ShellSort");

    }

    public static void shellSort(int[] arr, int[] delta) {
        int i, j, k, m;
        int span;
        int temp;

        int n = arr.length;
        int l = delta.length;

        for (m = 0; m < l; m++) {
            span = delta[m];

            for (k = 0; k < span; k++) {
                for (i = k; i < n - span; i += span) {
                    temp = arr[i + span];
                    j =  i;

                    while (j >= k && temp < arr[j]) {
                        // j >= k 更好，因为k是小组的下标，也是每组的第一个元素下标，所以每次比较都不能超过这个元素了。
                        arr[j + span ] = arr[j];
                        j = j - span;
                    }

                    arr [j + span] = temp;
                }
            }
        }
    }
}







2014/8/12 16:56:40 
