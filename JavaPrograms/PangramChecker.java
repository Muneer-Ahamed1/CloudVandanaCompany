
import java.util.HashSet;
import java.util.Scanner;

public class PangramChecker {
    public static boolean isPangram(String str) {
        str = str.replaceAll(" ", "").toLowerCase();

        HashSet<Character> uniqueChars = new HashSet<>();

        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                uniqueChars.add(c);
            }
        }

        return uniqueChars.size() == 26;
    }

    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);

        String input = s.nextLine();
        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
