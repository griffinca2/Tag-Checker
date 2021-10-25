# HTML Tag Format Checker

Checks that each starting tag has an ending tag, and that there are no extra starting/ending tags. This ignores the validity of the tags, and instead just checks the format. 
It will accept any tag value, whether or not it is actually a valid HTML tag. To make this program more useful, additional functionality would be to 
check that the given tag value is actually a valid HTML tag.

Uses Node.js to run, and Jest for Unit Tests. 

Test cases:

'<A></A>'
'<A></A><B></B>'
'<A><B></B></A>'
'<A><B><C></C></B></A>'
'<A><B><C></A></B></C>'
'The following text<C><B>is centerd and in boldface</B></C>'
'<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence'
'<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>'
'<B>This should be in boldface, but there is an extra closing tag</B></C'
'<B><C>This should be centred and in boldface, but there is a missing closing tag</C>'
'<A><B><C></C></B>'
'<<<<<A><B><</B></A>>>>'
'<#><@></@></#>'
'<ABCD><EFGH></EFGH></ABCD>'
  
 Note: These were all used at some point to test functionality, however some were not included as Unit Tests due to there already being a different unit test for the same thing.  
