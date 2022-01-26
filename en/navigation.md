<!--
  -- Name of your wiki
  -- Do NOT remove the leading `#` character.
  -->

# FGO Story


<!--
  -- Default theme
  -- (Read: http://dynalon.github.io/mdwiki/#!customizing.md#Theme_chooser)
  -->

[gimmick:theme](spacelab)


<!--
  -- Navigation
  -- (Read: http://dynalon.github.io/mdwiki/#!quickstart.md#Adding_a_navigation)
  -->

[Main Story](pages/story.md)
[Events](pages/events.md)
[About](pages/about.md)
[Feedback](pages/feedback.md)


<!-- A more complex navigation example: ----------------------------------------

[Menu Item 1]()

  * # SubMenu Heading 1
  * [SubMenu Item 1](pages/subitem1.md)
  * [SubMenu Item 2](pages/subitem2.md)
  - - - -
  * # SubMenu Heading 2
  * [SubMenu Item 3](pages/subitem3.md)
  - - - -
  * # SubMenu Heading 3
  * [SubMenu Item 3](pages/subitem3.md)

[Menu Item 2](pages/item2.md)

[Menu Item 3](pages/item3.md)

---------------------------------------------------------------------------- -->

<!--
  -- Change the Language
  -- Could be useful when there's more than one language wiki.
  -->

<!--
[Change the Language]()

  * [English (United States)](/en_US/)
  * [English (United Kingdom)](/en_GB/)
  * [Italian](/it/)
-->

<!--
  -- Let the user choose a theme
  -- (Read: http://dynalon.github.io/mdwiki/#!quickstart.md#Adding_a_navigation)
  -->

<form method="get" action="">
 <input type="text" name="search" id="search" value="" /> 
 <input type="submit" name="submit" value="Search" /> 
</form>

<script type="text/javascript">

	var defaultText = "Search..."; 
	var searchBox = document.getElementById("search"); //default text after load 
	searchBox.value = defaultText; 
	 
	//on focus behaviour 
	searchBox.onfocus = function() { 
	 if (this.value == defaultText) {
	 //clear text field 
	 this.value = ''; 
	 } 
	} 
	 
	//on blur behaviour 
	searchBox.onblur = function() {
	 if (this.value == "") {
	 //restore default text 
	 this.value = defaultText; 
	 } 
	}

</script>

[gimmick:themechooser](Choose theme)


