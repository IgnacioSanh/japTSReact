# Application Log by day

## Day 1

First configuration. Creation of the app using the typescript template. The milestones completed were:

-   Installation of bootstrap, react router dom
-   Creation of the navbar with logo
-   Library and Practice views

## Day 2

Since the creation of a modal is more complicated than expected, the react-bootstrap library is installed

-   Installation of react bootstrap
-   Creation of modal to add new word
-   First approach to transform word to japanese

## Day 3

Another day trying to fix the function to transform words to hiragana

-   Transform word function patched with @ts-ignore
-   Test for transform word added
-   Implementation of function with the original word input

## Day 4

-   Fixed the add word button: Now it adds the word to the list, closes the modal and clean the form
-   The filter works. For now only by the meaning
-   Added a small text to show how many words are filtered
-   When the word row is clicked, the card shows the clicked word

## Day 5

-   Implementation of the delete word modal
-   To confirm the delete of a word, you need to write down the meaning

## Day 6

-   Creation of the practice main screen
-   Started the guess the word menu

## Day 7

-   Giving functionality to the clock
-   Change layout using Row and Col (of React Bootstrap) in PracticeWords
-   Started the guess card

## Day 8

-   Trying to fix the clock when it should stop, but not working completely

## Day 9

-   Start developing the answers box. It connects the Question component with the new Answer components.
-   Start the score board, but is only a dummy number.
-   Need to set the min-length of the box and hide the answer box for xs-sm dimensions
