import java.util.*;

public class Main {
    public static void main(String[] args) {
        int[] n = {5,3,4,1,2};
        for(int i = 0; i < n.length; i++) {
            for(int j = 1 + i; j < n.length; j++) {
                if(n[j] < n[i]) {
                    int temp = n[i];
                    n[i] = n[j];
                    n[j] = temp;
                }
                System.out.println(Arrays.toString(n));
            }
        }
    }
}
