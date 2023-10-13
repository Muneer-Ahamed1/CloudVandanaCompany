import java.util.*;

public class Stuffle {
    public static void main(String[] args) {
        ArrayList<Integer> List = new ArrayList<>();
        List.add(1);
        List.add(2);
        List.add(3);
        List.add(4);
        List.add(5);
        List.add(6);
        List.add(7);
        Collections.shuffle(List);

        Integer[] shuffledArray = List.toArray(new Integer[0]);

        for (Integer num : shuffledArray) {
            System.out.print(num + " ");
        }
    }
}

