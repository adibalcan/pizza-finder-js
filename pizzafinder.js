(function findPizza(ingredients, blacklist) {
	var treeWalker = document.createTreeWalker(
		document.body,
		NodeFilter.SHOW_TEXT,
		{ acceptNode: function(node) { 
				for(i=0 ; i <ingredients.length; i++){
					if(node.textContent.indexOf(ingredients[i]) == -1){
						return false;
					}
				}
				for(i=0 ; i <blacklist.length; i++){
					if(node.textContent.indexOf(blacklist[i]) != -1){
						return false;
					}
				}
				return true
			} 
		},
		false
	);

	var nodeList = [];
	while(treeWalker.nextNode()) {
		treeWalker.currentNode.parentNode.style.background = '#00FF00';
		nodeList.push(treeWalker.currentNode.parentNode);
	} 
	console.log(nodeList);
})(['bacon', 'mozzarella'], ['pui', 'ananas', 'ou'])
