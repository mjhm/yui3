YUI.add("button-group",function(f){var a="contentBox",e="button, input[type=button], input[type=reset], input[type=submit]",c="click",d=f.ButtonCore.CLASS_NAMES;function b(){b.superclass.constructor.apply(this,arguments);}f.ButtonGroup=f.extend(b,f.Widget,{renderUI:function(){this.getButtons().plug(f.Plugin.Button);},bindUI:function(){var h=this,g=h.get(a);g.delegate(c,h._handleClick,e,h);},getButtons:function(){var g=this.get(a);return g.all(e);},getSelectedButtons:function(){var j=this,h=[],i=j.getButtons(),g=b.CLASS_NAMES.SELECTED;i.each(function(k){if(k.hasClass(g)){h.push(k);}});return h;},getSelectedValues:function(){var k=this,j,g=[],i=k.getSelectedButtons(),h=b.CLASS_NAMES.SELECTED;f.Array.each(i,function(l){if(l.hasClass(h)){j=l.getContent();g.push(j);}});return g;},_handleClick:function(m){var k,h=m.target,l=this,j=l.get("type"),i=b.CLASS_NAMES.SELECTED,g=h.hasClass(i);if(j==="checkbox"){h.toggleClass(i,!g);l.fire("selectionChange",{originEvent:m});}else{if(j==="radio"){if(!g){k=l.getButtons();k.removeClass(i);h.addClass(i);l.fire("selectionChange",{originEvent:m});}}}}},{NAME:"buttongroup",ATTRS:{type:{writeOnce:"initOnly",value:"radio"}},CLASS_NAMES:d});},"@VERSION@",{requires:["button-plugin","widget"]});