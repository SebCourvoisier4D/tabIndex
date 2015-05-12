WAF.define('MyWidget', ['waf-core/widget'], function(widget) {
	
    var MyWidget = widget.create('MyWidget', {
        init: function() {
          	if ($('div', this.node).length === 0) {
	        	this.node.innerHTML += '<div style="outline: 1px solid grey;">My Widget:<p><input type="text" name="fooname" id="fooid" class="fooclass"/></p></div>';
	        }
        }
    });

	MyWidget.addTabIndex('.fooclass');

    return MyWidget;

});