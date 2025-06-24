
Next step solving :

Base Case: If there are no more slots to fill, we are done! We found a solution.

Recursive Step:
 1. Take the first slot from the list.
 2. Try to fit every available word into that slot.
 3. If a word fits, call solve() again for the rest of the slots and words.
 4. If it doesn't work out, backtrack and try the next word.