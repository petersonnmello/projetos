(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 450,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.logoJTI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009A6E").s().p("Ah6FhQgGgFgEgIQgDgHgBgGIAAgGIAAqoIERAAIAAIfIgBAIQgBAIgFALQgFAKgMAIIgTAMIgtAdIg0AkIgwAeIgXAQQgIAFgNACIgFABQgLAAgLgHg");
	this.shape.setTransform(147.5,51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009A6E").s().p("Ao/IGQghgNgRgSQgRgSgEgVQgEgVAEgVQAEgUAOgPQAPgOASgHQATgIAQABQAbABAWAMQAVANAOAgQAKAbALALQAKALAOABQAOAAAKgRQALgSABgjIAAgsIAAhZIAAh2IAAiCIAAiAIAAhvIAAhOIAAgeQgBgNgIgIQgJgIgMAAIgqAAQgTgBgNgMQgMgNgBgUQABgTAMgNQANgNATAAIGPAAQAQAAAJgHQAKgHADgMQACgFAGgJQAFgIALgGQAJgHAQAAIJxAAIAEABIABADIAABWIgBADIgFABIipAAQgQAAgLAKQgLAKgBAQIAAI9IgBAIQgBAIgFALQgFAKgMAJIgTAMIgtAdIg2AjIgwAfIgXAPQgHAGgOACQgNADgOgJQgGgFgDgIQgDgHgBgGIgBgGIAAq+QAAgagNgJQgOgKgUAAIhTAAQgSAAgJAHQgGAGgDAMQgCAFgFAIQgFAHgLAGQgKAGgRABIgZAAQgMAAgJAIQgIAIAAANIAAI3IgBANQgBAOgFATQgGATgNAUQgLAQgQANQgQANgMAIIgOAIIjGCFIgOAIQgOAHgYAIQgYAIgfACIgFAAQgcAAgggLg");
	this.shape_1.setTransform(65,68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009A6E").s().p("AhoAtQgTgBgMgNQgMgMAAgTQAAgSAMgNQAMgMATgBIDRAAQATABAMAMQAMANAAASQAAATgMANQgMAMgTABg");
	this.shape_2.setTransform(147.4,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.3,120.9);


(lib.JTI2_pernas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E5368").ss(0.1,1,1).p("AHG0HIAAi3IhcAAAB0zDQBMgGBOgPIAAjmIiaAAIj5AAIh0AAIhoAAAHG0HQgTAGgvANIgaAHIAAjRIhcAAAHZuWIg/hAQgNgNgKgNQgigogPgqQgMgkgJhHIASgJQAJBHAMAkQAPAqAiAoQAIAMAUATQAYAZAOANIACAeIA8NGIgNAsIA6ESIAtQMIAZA4IAABEQgjBHiBABQi8ALhoh6QAHgfAFgfAAfy+Qg+ABhDgEIgjgDIAAj6AB0zDQgpAEgsABAB0zDIAAj7AhizBQAbDNAEDZIAfAWIAvAhIAUnaAHG0HIARFTAiFzEQg9gFhDgNQgKhvAWh5AnWwXQAigoAPgqQAMgkAJhHIASAJQgJBHgMAkQgPAqgiAoIgUAXIACggIAOjwIAAi3IBnAAAnI0HQAzAQAvAMQgMhoARhrApfOqIghhRQAojQAjqqIgOhMIBiruIAJicABtARIBMCYAC6MkIgMgDIg2neIgLkyAALrkIBOLQIAUAlAh4grIAAEDQgYChgTDvQgQC9gIC6IAfCQIgjCXAIIgkIhEDjAALrkIiDK5IglDUAC8MlIADAAIAAAEIAAABQAHBDgBBbQgDCIgKAzIAUCOADTOuIgUiEADbRoQAABXgPBSAI/SRIAwBpAjQN/IAVBgApfOqQAAAwgIA5QgLBJgVBFIAdArIAAAwQCQADBuAuQCJBbAkgrIAAhXIAAihAo5QBIgmhX");
	this.shape.setTransform(96.8,147.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhZB8IgjgDIAAj3ID5AAIAAD5QgpAEgsAAIggAAQgvAAgygDg");
	this.shape_1.setTransform(95.9,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#283644").s().p("ADAT0QAHgfAFgfIgViOQALgzADiIQABhcgHhCIAUCEIgUiEQAkBcAmBpQAgBXABADQAAAYgJBKQgHA7AGAfQARBaCWAAQAoAAATgIQATgIAageIAAhbQgmgBggggQgcgmgJgJIAAhlQBXgTASiyQAGg6gBhNIgDhYQAAiegEgbQgJhKgyhOIgVASQgMAKgSAAQgwAAgIhAQgBgGAAiQQAAglAgk8QAfk8ABg+QgBicgOhNQgShIgKg8IA/BAIA9NGIgOAsIhDDjIBDjjIA8ESIAsQMIgxhpIAxBpIAZA4IAABEQgjBHiBABIggAAQilAAhfhvgADMS2QAOhSABhXQgBBXgOBSgAlsTSQhtguiRgDIAAgwIgdgrQAVhFALhJQAQAaALAjQAFAQAXBuQAkAIBQAAQBbAAASgIQAvgUgBhVQAAgOgNhXQgPhXAAgPQAAhDA2jBQA3jBAAhXQAAhQgYgwQgOgegmglQgngmgOgaQgZgsAAhLQABhVAwhkQAbg4BRh9QBOh5AhhHQA0hxAGhqIAvAhIiDK5IglDUIAljUIAAEDQgYChgTDvQgPC9gJC6IgVhgIAVBgIAfCQIgjCXIAAihIAAChIAABXQgMANgWAAQguAAhdg9gAJvSfgAC/LPgAh4iGgAGZwxIgEgjQAIAMAUATQAXAZAPANIABAegAGxw1QgUgTgIgMQgPhbgBigIBBgTIARFTQgPgNgXgZgAGZwxgAGVxUIAAAAg");
	this.shape_2.setTransform(96.8,156.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#314253").s().p("AFHU1QgGgfAHg7QAJhKAAgYQAAgDgghXQgmhpglhcIAAgBIAAgEIgDAAIgCgBIgMgDIg2neIgLkyIBMCYIhMiYIgUgnIhOrOIAUnaQAsgBApgEQBNgGBNgPIAAjmIBcAAIAADRIAbgHQACCgAOBbIAFAjQAJA8ATBIQAOBNAACcQAAA+ggE8QggE6AAAnQAACQABAGQAIBAAxAAQARAAAMgKIAVgSQAyBOAKBKQADAbAACeIADBYQABBNgGA6QgSCyhXATIAABlQAJAJAcAmQAgAgAmABIAABbQgaAegTAIQgSAIgoAAQiXAAgRhagAFkx9QAJBHAMAkQAPAqAiAoQAKANANANQgNgNgKgNQgigogPgqQgMgkgJhHIASgJQAJBHAMAkQAPAqAiAoQgigogPgqQgMgkgJhHIgSAJgAoJT+QgWhugGgQQgKgjgQgaQAHg5ABgwIAmBXIgmhXIghhRQAnjQAjqsIgNhKIBhruIAKicIABggQAigoAPgqQAMgkAJhHIASAJQgJBHgMAkQgPAqgiAoIgTAXIATgXQAigoAPgqQAMgkAJhHIgSgJQgJBHgMAkQgPAqgiAoIAOjwQAzAQAvAMQgMhoAShrIBoAAQgWB5AJBvQBDANA9AFIAjADQBBAEBAgBIgUHaIgxghIgdgWQgEjZgbjNQAbDNAEDZIAdAWQgDBqg1BxQghBHhOB5QhRB9gbA4QgwBkAABTQAABLAYAuQAOAaAnAmQAmAlAOAeQAYAwAABQQAABXg2DBQg3DBAABDQAAAPAPBXQAOBXAAAOQAABVguAUQgTAIhaAAQhRAAgkgIg");
	this.shape_3.setTransform(92.9,142.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A2A2A").s().p("ADRh8ICaAAIAADkQhNAOhNAHgAinBqQgKhtAWh5IBzAAIAAD3Qg9gEhCgNgAlrA5IAAi1IBoAAQgSBqAMBnQgvgMgzgQg");
	this.shape_4.setTransform(87.5,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#232323").s().p("AgthnIBbAAIAAC1IhAATIgbAHg");
	this.shape_5.setTransform(137.7,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#553317").ss(0.1,1,1).p("AGAgUIAAAZID6EeQBMAXCPgeIAAhfQhDjEhnjQIknAAIgzAAIAACoIAYAlgAj5gEQgKAJgKAKQi/BmivA2QiMAShNgyIAAhHIAagTIAJgHICxiEIBUhNQBLhDAUhCIFvALIARB9IAIBMQAKAciLA/gAjGADIAAheQgVAvgeAoAFpgKQAEgzATgqIAABT");
	this.shape_6.setTransform(85.3,302.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262626").s().p("AAEgCIgHAFQgBgDAIgCg");
	this.shape_7.setTransform(3,306.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#140C05").s().p("Ak8AsQAfgnAUguIAABfgAE9g1IAABSIgXAJQAEgxATgqg");
	this.shape_8.setTransform(92,297.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24160A").s().p("AJ6D5Ij6kdIAAgaIAAhUQgTAqgEAzIgYgkIAAipIAzAAQARA4AKA5QAKA0AOA0QAQA1AhAuQAkAvA4AOQAjAIALgcQAZg3gag1QgYg1gPg6QAgAOANAkQANAoAQAmQAYA7AiA3QAKAPARAFIBsAEIAABfQhSASg8AAQgsAAghgKgAtUBgIAAhGIAbgUQgDAIAfATQAgAUBQADQA1gLAwgbQAygbArgjQAZgUAdgJQgDAXgTALQgaANgGAbIABACIAGAGQAugJAogYQAygiAtgpQATgRAVgNQAegTAlgEQAUgDAUgIQArgRAkgaIAIBMQAKAciLBBIAAhhQgUAwgfAnIgTAWQjBBjiuA2QglAFghAAQhaAAg5glg");
	this.shape_9.setTransform(85.3,306.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#392311").s().p("ALcDwQgRgEgKgQQgig2gXg7QgQgogOgoQgNgigggOQAPA4AYA0QAaA3gYA4QgMAcgigIQg5gOgjgwQgigtgQg3QgOg0gKgyQgKg6gRg3IEoAAQBmDOBDDGIhsgFgAspCEQgggUADgHIAJgHICxiDIBThOQBLhCAUhDIFwAMIAQB9QgjAagsAQQgUAJgUADQglAEgdATQgWANgTAQQgtAngyAjQgoAaguAJIgGgGIgBgCQAGgdAagNQATgLADgXQgdAJgYAUQgsAjgyAdQgwAbg1ALQhQgEgfgTg");
	this.shape_10.setTransform(86.6,296.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,172.6,334.5);


(lib.JTI2_olhos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F271B").s().p("AA5AEIgWgJQgogHgrAHIgUALIgGAFIAQgPIAOgHQAtgKAoAMIAiAZg");
	this.shape.setTransform(10.2,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF9174").s().p("AApAAQgogNgtAKIgOAFIgQASQAEgRAOgOQAxgWA2APQARAVALAWg");
	this.shape_1.setTransform(10.2,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5CCB3").s().p("AACAHQgCAAgBgDQgCgCAAgCIABgCIABgCQABgCACAAIABAAIgCAEIAAACQAAADADAEIgCAAg");
	this.shape_2.setTransform(8.4,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#504229").s().p("AgDgBIABgDIAFAAIABADQAAACgCACIgCACQgDgEAAgCg");
	this.shape_3.setTransform(8.9,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B160E").s().p("AgFAEIgBgCQAAAAgBgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIACgBQAEgDAEAAQAEAAAEADQADACAAAEIgQgBg");
	this.shape_4.setTransform(9.9,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#85714A").s().p("AAMALQAAgEgDgEQgEgDgFAAQgDAAgEADIgCADIgBAAQgDAAgDACIAAACIgJABQAAgKAIgFQAHgIAKAAQAKAAAIAIQAIAGAAALIAAAAIgOgCg");
	this.shape_5.setTransform(9.8,8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#302819").s().p("AgIAFIgBgBIAEgCQACgCAAgBIgBgEIAQACIAAABQAAAEgDADQgEAEgFAAQgEAAgEgEgAgLgFIABgDQABAAAAAAQABAAABAAQAAAAABABQAAAAABABIABABIgHAAg");
	this.shape_6.setTransform(9.8,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#C5A487","#6D5E34"],[0,1],-1.6,-0.3,0,-1.6,-0.3,5.2).s().p("AgRAGQgIgGAAgKIAAgCIAJgBIgBADQAAADABACQADACADAAIACAAIABACQAEABADABQAFgBAEgBQAEgEgBgFIAAgCIAOACQAAAKgIAGQgIAIgKAAQgKAAgHgIg");
	this.shape_7.setTransform(9.8,11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CF9174").s().p("AgygRQA1gUAyASQAQAOAFAPIgRgOIgNgIQgpgCgpAIIgjAiQAJgXAOgWg");
	this.shape_8.setTransform(33.5,9.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3F271B").s().p("AgmgNQApgJApADIANAHIARAOIgbgQQgrgEgoAJIglAeg");
	this.shape_9.setTransform(33.5,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F271B").s().p("AC4AKQhDgJg2AMIgLAAIAAgeIANgNQA7gHA+AQQAfAhABAVgAi5gVQA+gQA7AHIANANIAAAeIgLAAQg2gMhDAJIgiAXQABgVAfghg");
	this.shape_10.setTransform(21.9,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#C5A487","#6D5E34"],[0,1],-1.6,-0.1,0,-1.6,-0.1,5.2).s().p("AgSAIQgHgHAAgJIAAgBIAJgCIgBADQAAADACACQACADACAAIACAAIACAAQADADAEAAQAFAAAEgDQADgDAAgFQAAgEgBgDIAOAAIABAHQAAAJgHAHQgJAIgKAAQgJAAgJgIg");
	this.shape_11.setTransform(33.4,10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5CCB3").s().p("AACAFQgCABgBgDQgCgCAAgBIABgDIAEgBIgBADQAAADADADIgCAAg");
	this.shape_12.setTransform(31.9,10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#302819").s().p("AgJAFIgBgBIADgCQACgCABgBQgBgDgCgCIAAgBQAHgBAJAAQACADAAADQAAAEgEADQgDAEgEAAQgFAAgEgEg");
	this.shape_13.setTransform(33.5,10.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#504229").s().p("AgDAAIABgDIABgDIACACIABAAQACACAAACQAAACgCACIgCADQgDgEAAgDg");
	this.shape_14.setTransform(32.5,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A68B6A").s().p("AgBAAQABgBACAAIABAAIgBABIgEACIABgCg");
	this.shape_15.setTransform(31.9,9.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B160E").s().p("AgKACIACgCQAEgCAEAAQAFAAAEACIACACQgKAAgHACIgEgCg");
	this.shape_16.setTransform(33.4,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#85714A").s().p("AgRgEQAIgIAJAAQALAAAIAIQAFAEACAHIgPAAIgCgDQgEgEgFAAQgDAAgEAEIgCADIgBAAQgDAAgCACIgBACIgJACQAAgLAIgGg");
	this.shape_17.setTransform(33.3,8.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFFF","#E0E0E0"],[0.329,1],-0.1,0,0,-0.1,0,7).s().p("AgXANQgggGgHgIQA1gbBIAbQAAABgDACQgEAGgOADQgaAEgSAAQgMAAgJgCg");
	this.shape_18.setTransform(9.7,11.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9999").s().p("AApAIIARgMQgBAEAEADIgIAFgAg8AAQADAAAAgDIgBgEIASAKIgLABg");
	this.shape_19.setTransform(21.9,11.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFFFFF","#E0E0E0"],[0.329,1],-0.4,0.2,0,-0.4,0.2,6.9).s().p("AgoAQQgOgBgFgGQgEgDABgGQA+gdA/AWIAAABIgEAGQgJAGgZAHQgQAEgWAAIgbgBg");
	this.shape_20.setTransform(34,10.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CF9174").s().p("AiCAPQgogFgUgMIAFgFIABACQAHAIAgAGQAZAEAqgGQAOgDAEgEIAJACQggAOgiAAIgNgBgAA1AGIAIgFQAFAGAOABQArADAYgGQAZgFAJgIIAEgGIAAgBIAGAFIgFAEQgTALgiAHQgOACgOAAQgbAAgZgIg");
	this.shape_21.setTransform(21.8,11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("Ai3AMIgBgCIAUgLQAqgIAqAHIAXAKIABAEQhLgZg0AZgABPgFQAqgJAsAEIAVAMQhAgVg/Aeg");
	this.shape_22.setTransform(21.8,9.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3F271B").s().p("AgkAMIgngJIAIgFQBNAXBCgiIgOANIgOAGQgfAIgYAAQgPAAgOgCg");
	this.shape_23.setTransform(33.7,11);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CF9174").s().p("AhHALQAOgLAHgKQA1gSAyAOIATAOQgnAVgqAAQgeAAgggKg");
	this.shape_24.setTransform(34.1,9.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3F271B").s().p("AguAIIgOgGIgQgLQBGAcBKgdIAJAGIgmAKQgVAFgWAAQgUAAgWgDg");
	this.shape_25.setTransform(10.4,11.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CF9174").s().p("AhIAGIASgPQAygSA1ANQAJAJAPAKQgnAQgjAAQgkAAgjgPg");
	this.shape_26.setTransform(10,9.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CF9174").s().p("AA3AMIgLAAIARgMIAVgJQAqgKArADIAVAJIAGAEQgTALgoAIQgPACgPAAQgZAAgZgGgAiEAQQgpgEgUgMIAGgCIAUgLQArgHAqAGIAWAKIASAIIgLABQggALgjAAIgMAAg");
	this.shape_27.setTransform(22.1,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{y:3.3}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_10,p:{y:4.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},39).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{y:3.3}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_27},{t:this.shape_10,p:{y:4.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},22).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{y:3.3}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_27},{t:this.shape_10,p:{y:4.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},104).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{y:3.3}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_27},{t:this.shape_10,p:{y:4.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},103).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{y:3.3}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.8,13.3);


(lib.JTI2_cabeca_inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CF9174").ss(0.1,1,1).p("Ag6iCQAQASANAhQABAOABAOQABAngIAmQgCAOgCALQgDAXACANQABADABADQAAABABACIACAEIATAfAg0B7QgRgPAAgPIASgcAAtB+QATgOAHgQQgGgSgRgP");
	this.shape.setTransform(29.8,58.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996D57").s().p("AAkAGIgSgMQAhABgCALIgHABIgGgBgAgvAGQgCgIATgCIABADIACACIgHAFIgHABIgGgBg");
	this.shape_1.setTransform(29.1,68.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D19D84").s().p("AALAmQAVACAmAQQgGAQgUANIgfgIQgNgCgFARQAFg5ALADgAAcBAQAHACAHgCQACgMgigBgAg1BTQgQgPgBgPIAfgGIACAFQgUADADAJQAGACAGgCIAIgFIASAgQgUgOgRAGgAgbhbQAAAngHAoIgEAWIgNAOQAOgpAKhKg");
	this.shape_2.setTransform(29.8,62.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0AE96").s().p("AAvBRIgegPQgHgUgBgeQAAgXAEg3IAPg0QgSB6AOAmIAmAnIAIAeQgFgTgSgPgAgzBTIANgOQgDAXACANIgfAHg");
	this.shape_3.setTransform(29.8,56.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CF9174").ss(0.1,1,1).p("AENi1QAHgLACAIADRgoQALAzAdgfQAEgbARgoQAkg/gFgpQgKhGgiAuAkQi/QgHgLgCAHAjhgVQgLAJgQgTQgEgbgRgnQgkg/ALg4QALg4AdAsAjqhpQgDgSgBgRQgBgGAAgGAkQi/QgBAMABANQACAOAEAOQgDgPAEgGQACgDAFAAQgIgVgGgIgAjqhpQgJALAFAPQAGAOAAABQAFAWACAVQAEAsAAAlQAAAkAvApIBEBHIAcAdQAqATBRgOQAQgDATgUIBWhTQAYgUAGg/QAEgtAJgwQADgPADgPQAFgBAEgCQALANAHgjIAVghQAEgYgMAAQAIgUAGgJQACAbgIAaAkKiKIARAbQAIAyAJgDAjqhpQgEgHgDgGQgJgbgIgRADghJQAHgFADgIQAEgJAAgNQAJgaAIgS");
	this.shape_4.setTransform(30.6,66.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D19D84").s().p("Aj3ABIgRgZQgDgPAEgFQACgEAFAAQAIASAJAbIAHAKQgJALAFAPIAGAQIgBAAQgJAAgHgwgADiAoQAHgFADgJQAEgJAAgMIARgqQAMgBgEAZIgVAfQgFAZgHAAQgDAAgDgDg");
	this.shape_5.setTransform(30.4,55.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6F4029").s().p("Ag7gGQgDgbgMgTQgJgNgNgJQAPAAAVAWQAXAiANA7QAFAXAJATQgrgugGgrgAgOhNQAkgLAoANQAvAWgPAuIgGALQgLhDhbgOg");
	this.shape_6.setTransform(14,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0B8A5").s().p("AhoFJIhEhGQgvgpAAglQAAglgEgtQgCgWgFgVIgGgQQgFgPAJgLIgEghIgBgMIAAgBQgCgeABgdQAMhDgGhLQArg3APg5QAhBIBUAJQAqgCAHAhQABgPgJgQQALAJAGAZQBBg6AuACIA1AAQAsBIAHBVQAFBUgcBDQgdBEAIAzQAPA/g9BKIhCBBQgvgOhCAOQgFADgGAAQgPAAgZgRgAEBgeQAIgVAGgIQACAagIAbQAEgZgMABgAkOgtQgBgMABgNQAGAJAIAUQgFAAgCAEQgEAFADAPQgEgOgCgOg");
	this.shape_7.setTransform(30.4,54.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0AE96").s().p("AhOFeIgcgeQAjAXAQgJQBCgOAvAOIBChBQA9hKgPg/QgIgzAdhEQAchDgFhUQgHhVgshIIg1AAQgugChAA6QAgguA3gfQAhgSAggZQAhBHAnAqQAMAzgHBRIgKB4IAPgXQAHgrAQgrQAiguAKBGQAFAqgkA9QgRAngEAbQgdAhgLg0IAGgeIAJgDQALAMAHgiIAVgfQAIgbgCgaIAAgBIAAgBQADgEACgBIABAAIAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABABAAIAAABIAAAAIAAAAIAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIAAAAIgBAAQgCABgDAEIAAABIAAABQgGAIgIAVIgRAqQAAAMgEAJQgDAJgHAFIgJADIgGAeQgJAygEAtQgGA/gYATIhWBTQgTAUgQAEQgjAFgaAAQgmAAgYgKgAj8BQQgEgbgRgoQgkg9ALg4QALg4AdAtQAIAcABAOQAIAOACASIAAABIABAMIAEAhIgHgKQgJgbgIgSQgIgUgGgJIAAgBIgBAAIAAgBIAAAAIgEgEIAAAAIAAAAIAAAAIgBAAIgBgBIAAAAQAAABAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIAAAAIAAABIAAgBIAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAgBIAAAAIABABIABAAIAAAAIAAAAIAAAAIAEAEIAAAAIAAABIABAAIAAABQgBANABAMQACAOAEAOIARAaQAIAxAJgCQAFAVACAWQgDACgEAAQgJAAgLgMg");
	this.shape_8.setTransform(30.6,55.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#623A26").s().p("Ag2B0QgGgFgIAAQgagCgLgNQgsg1Aag+QAFgMAGgLIAGgNQAUgjAggeQAzgYA2AHQA2AHAcgTQgZASgmAJIgZAFQhLARgyA6QgyA3AvAvQAuAvACArQgIgZgLgJg");
	this.shape_9.setTransform(34.2,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#513324").s().p("AjoDgQgBgOgIgcQgQgxgJgqQgFgbgKgXQgLgXALgZQBOiGgUgzQANATADAbQAFAsArAvIAAABQgPA3gqA2QAFBMgMBCQgBAeACAdQgCgRgIgPgAgegdQgugvAyg6QAvg6BNgRIAagFQBMA+BYggQgyArgrAEQgrADgoAkQgoAhg4B8QgCgsgsgsgAiCiBQgShBgsgYQAPgBAPACQBcANALBGQgGAMgEAMQgaA/ArAzQg8glgShggAhVjXQANgaAwgBQA1AAAegNQgfAOgcAdQggAegUAjQAOgugvgWg");
	this.shape_10.setTransform(28.8,25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5B3826").s().p("ABhgLQAogjArgEQArgEAygqQgYAdgXAaQgkAngkAbQggAaggASQg4AeghAvQA4h9AogggAg4BwQhVgJghhIIAAgBQgJgTgEgVQgOg9gXgiQgUgdgcgKQAmgCAbAPQAsAYASBBQASBeA8AnQAMAOAZACQAIgBAHAGQAIAPAAAQQgIgigpADg");
	this.shape_11.setTransform(30.3,16.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#442C20").s().p("AAGBfQAGhRgLgxQglgqghhHQAkgeAigmQA5AoANA3IglDjQgRArgGArIgNAZg");
	this.shape_12.setTransform(52.9,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,0,62.5,92.7);


(lib.JTI2_bracos5_inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BACED3").s().p("AgJAgIAtglIAIAGIgsAmgAgrAFIArgrIAJAGIgrArg");
	this.shape.setTransform(-34.2,128.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BACED3").ss(0.1,1,1).p("ABkApIhCA2Qg8hUhJgfIAyhKQBcAiA5Blg");
	this.shape_1.setTransform(-34.5,129.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A3B0B3").s().p("AhjgUIAyhKQBcAiA5BlIhCA2Qg8hUhJgfg");
	this.shape_2.setTransform(-34.5,129.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C58E73").ss(0.1,1,1).p("ABMAOQAFgBAEgCQAVgKAVgKQAngaAjhFQAggQAhhDAh9hXQgqAIgigCQgiAAgOgrQAkgHAdgKQAegLAmgNQAvgUBEgfQA2gaA0AKAh9hXIAqgMQACABADAAIAHgCIATgFQATAIASAGQAQAGASABQALABAKgBQAggCAcgRAjGB7QggAigQABQgTgCAAgEIBfjAIAtgvACKj5QgOAKgTAHQAJACAJADAgNg5QACAOADANQADAGADAJIgsAsIgeA7IghCfQAbALAVgqIAlhuIAVgdIAZg+QgIgEgFgHQgIgGgDgNAgUhJQAEALADAFABMAOQgMAIgDgBAAWAPQAKACANgCABMAOQgrBWARAYQAQAYADAQQAAATgMAFIgwgrIgMhEAjGB7IBMh2IBtg+AguAdIg/A0QhSCHgLAOQgLAKgVgEIAkhx");
	this.shape_3.setTransform(-55.3,151.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0B8A5").s().p("AhtD3IAhifIAeg7Ig/A0QhSCHgLAOQgLAKgVgEIAkhxQggAigQABQgTgCAAgEIBfjAIAtgvQgqAIgigCQgiAAgOgrQAkgHAdgKIBEgYQAvgUBEgfQA2gaA0AKQATgHAOgKQB6AYAGAmQghBDggAQQgjBFgnAaQgVAKgVAKQgEACgFABIgBABIgBABIgCABIgBAAIgIAEIgBAAIgBAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIABAAIAIgEIABAAIACgBIABgBIABgBQgrBWARAYQAQAYADAQQAAATgMAFIgwgrIgMhEIAZg+QgIgEgFgHQgIgGgDgNQADANAIAGQAFAHAIAEIgZA+IgVAdIglBuQgRAigUAAQgFAAgGgDgAh6AFIhMB2IBMh2IBtg+gAguAdIAsgsIgGgPIgFgbQgDgFgEgLQAEALADAFIAFAbIAGAPgAAhAQIALgBIABAAIgBAAIgLABIgBAAIgBAAIgFAAIgEgBIAEABIAFAAIABAAIABAAgAAghTIAEAAIAEgBQAggCAcgRQgcARggACIgEABIgEAAIAAAAIgBAAIgEAAIgDgBIgCAAIgDAAQgSgBgQgGQgSgGgTgIIgTAFIATgFQATAIASAGQAQAGASABIADAAIACAAIADABIAEAAIABAAIAAAAgAh9hXIAqgMIAFABIAHgCQAAgBgBAAQAAAAAAAAQgBAAgBABQgBAAgBAAIgCACIgFgBgAB7jjQgJgDgJgCQAJACAJADgABMAOIAAAAg");
	this.shape_4.setTransform(-55.3,151.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#8CC8E1").ss(0.1,1,1).p("ABXDRICBizIBDhtIAthKQguiYi9icQhLBohNCYQgvBcgxBuIg+AHIg1CUIg5BNQAaB0CMBUQByBDA1hEIANgoIAbhNAATGEIBNh4IgJg7IgXAeIgZAiQjPgkggiIQAPgjANggQAJgUAIgRAkOCYIgUA0");
	this.shape_5.setTransform(26.3,46.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADCDDC").s().p("AiLEtQiLhUgbh0IA5hNIA2iSIA+gJQAwhuAwhcIgCAHQhIDogBAIQgHAoAEAVQAEAWAMATQANAVAUAbQAVAbAuALQAwALAMAAQAqhUBfh0QA3hDA0g1IhEBvIiBCxIAJA7IhNB4IAbhNIgbBNIgNAoQgbAigpAAQgqAAg5ghgAi0hGQgQAXgEAsQgGA/gUAYIgPAOQgGAIgCANQgFAgARAgQATAgAhARQAXAPAYANQAtAZAcAEQAwAIAHgIQALgZAagiQAGgIAJgUQAHgQAIgGIAXgOQAPgLACgNQACgHgIgOIgFgKIAXgeIgXAeIgYAiQjQgkggiGIAdhDQgSAEgNASgAkLBMIATg0gAiVhcIARgnIgRAng");
	this.shape_6.setTransform(24.1,59.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B9DBEB").s().p("AhzG2QgcgEgtgaQgYgNgXgOQghgSgTggQgRggAFggQACgMAGgIIAPgPQAUgYAGhBQAEgsAQgWQANgSASgEIgdBCQAgCIDQAlIAYgiIAFAJQAIAPgCAHQgCANgPALIgXANQgHAGgGARQgJATgGAIQgaAigNAaQgDADgOAAQgOAAgYgDgAguD7QgwgMgVgaQgUgbgNgVQgMgVgEgXQgEgVAHgoQABgIBIjmIACgGQBOiYBJhoQC9CbAvCZIgtBJQg0A2g3BAQhfB2gqBVQgMAAgugLg");
	this.shape_7.setTransform(29.1,44.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CF9174").ss(0.1,1,1).p("AkfFbQBqg2BlhJQBohOBlhkQDBi9AIiDIjOhEQiqCdhZC9QgeA4gtBAQgwBDg/BKg");
	this.shape_8.setTransform(-13.2,105.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0B8A5").s().p("AkKC7QA/hKAwhDIAPgLQAHgHBiiIQBgiKATgRQAXgWBMAfQAmAOAiATQASAUgCAeQgDAbgLAQQgLAPgbAfQgbAegbAXIhHA7QgrAlgTASQgXAVgaAoQhlBJhqA2g");
	this.shape_9.setTransform(-19.1,113.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0AE96").s().p("AhVDeQAUgSArgkIBFg9QAbgYAbgeQAbgfALgPQALgOACgbQADgegSgTQgigUgngOQhJgfgXAXQgTAQhiCIQhiCKgHAHIgQALQAtg/Afg6QBZi7CqidIDOBDQgICEjCC9QhiBjhrBOQAcgnAXgWg");
	this.shape_10.setTransform(-7.7,99.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-0.9,143.2,178.5);


(lib.JTI2_bracos4_inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BACED3").s().p("AAFAiIAVg5IAKAEIgUA1gAgkAaIARg7IAKABIgQA7g");
	this.shape.setTransform(1.7,147.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BACED3").ss(0.1,1,1).p("ABmgPIgfBOQhdgqhPAIIAGhXQBggRBlA8g");
	this.shape_1.setTransform(2.2,148.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A3B0B3").s().p("AhlAdIAGhXQBggRBlA8IgfBOQhdgqhPAIg");
	this.shape_2.setTransform(2.2,148.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C58E73").ss(0.1,1,1).p("ACIgiQADgCADgEQAPgTANgTQAYgpAChNQAWgcABhLACIgiQgCBfAaAOQAZAPAJAOQAJAQgJAKIg+gSIgqg4IgChBQgJAAgIgFQgLgDgKgKIgTA7IgCBDIAoCdQAcgCABgvIgPhzIAHgkAA2kNQAJgDAKAAAhagnIAhgbQACgBADgCIAFgFIAPgMQAVAAARgEQATgCAQgHQAKgDAJgGQAcgQASgbAAIhHQAJAIAFADQAIALAIALQAGAEAGAHAhagnQgiAaggANQgfANgfgfQAegWAWgVQAWgXAcgcQAignAwg6QAlguAzgOAg/C3QgPAsgOAIQgRAHgDgEIACjZIAUg8ABYgJQAJgCALgIAAfAgIggBKQgQCdgEASQgGAOgUAFIgQh1IAQiMIBFhnABNkrQgIAPgPAPACIgiQgIANgDAB");
	this.shape_3.setTransform(-12.9,178);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0B8A5").s().p("Ag/C/IAQiMIBFhnQgFgDgJgIQAJAIAFADIhFBnIgQCMQgPAsgOAHQgRAIgDgEIACjZIAUg7QgiAZggALQgfAPgfgfQAegWAWgWIAygyQAignAwg5QAlgwAzgOQAJgCAKAAQgKAAgJACQAPgOAIgOQB3ggAXAgQgBBJgWAdQgCBOgYAoIgcAmIgGAGQgIAMgDACQADgCAIgMQgCBeAaAPQAZAPAJAOQAJAQgJAKIg+gSIgqg4IgChBQAJgCALgIQgLAIgJACQgJAAgIgEQgLgEgKgKIgMgLIgQgWIAQAWIAMALIgTA7IATg7QAKAKALAEQAIAEAJAAIACBBIgHAjIAPBzQgBAwgcACIgoieIAChCIggBKQgQCdgEARQgGAOgUAGgAg0g9IgFADIghAcIAhgcIAFgDIAFgEIAPgOQAVAAARgDQATgCAQgHQAKgEAJgFQAcgQASgbQgSAbgcAQQgJAFgKAEQgQAHgTACQgRADgVAAIgPAOQAAgBgBAAQAAAAAAAAQgBABgBAAQAAABgBABIgBACgABaBAgAAygTIAAAAgACIgaIAAAAg");
	this.shape_4.setTransform(-12.9,177.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#8CC8E1").ss(0.1,1,1).p("ABmDKIBwi/IA6hyIAmhOQg8iTjLiKQg/BuhBCfQgmBggnBwIg9AOIgoCYIgPA2ABmDKIgUAgIgVAkQjSgSgtiEQAMgkALghQAHgVAGgTAkDCxIgyBSQAlBxCTBHQB4A4AuhIIAKgpIAUhPAAzGCIBCh/IgPg5");
	this.shape_5.setTransform(30.9,46.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADCDDC").s().p("AhqE1QiThHgkhyIAxhSIgOA3IAOg3IAoiWIA9gOQAmhyAnhgIgBAHQgzDtgBAIQgCApAGAVQAGAUAOATQAPAUAWAZQAXAZAvAHQAxAHAMgCQAihYBUh8QAwhHAwg6Ig6B1IhwC8IgVAgIAVggIAOA6IhBB/IAThQIgTBQIgKAoQgbApgwAAQgnAAg0gYgAi0g5QgPAYAAAqQAABCgSAZIgNAQQgGAJgBAMQgCAgAVAfQAVAeAjAOQAYANAZALQAvAVAcABQAvADAGgIQAKgaAYgkQAFgJAHgUQAFgRAIgHIAVgQQAOgMACgNQAAgHgJgOIgGgJIgVAkQjSgRgriDIAVhFIAOgoIgOAoQgRAGgKATg");
	this.shape_6.setTransform(29,60.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B9DBEB").s().p("AhRG+QgcgCgwgVQgYgLgYgMQgjgOgVgfQgVgeACggQABgNAGgIIANgQQASgaAAhBQAAgsAOgZQALgSARgGIgWBFQAsCEDSASIAVgkIAGAJQAJANgBAIQgBANgOAMIgWAPQgHAHgFASQgHAUgFAIQgWAkgKAbQgEAFgbAAIgYAAgAgdD9QgxgHgXgYQgXgZgOgUQgOgUgHgWQgFgUACgpQABgIAzjsIABgGQBAifBAhuQDKCKA8CTIgmBOQgvA5gwBGQhUB+giBYIgGAAQgPAAgmgGg");
	this.shape_7.setTransform(33.7,44.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CF9174").ss(0.1,1,1).p("AiFG0Qgeh0gJh8QgKiEAOiKQAbkQBthZIDRBzQgMDohlC8QgdA8gXBMQgWBPgSBgg");
	this.shape_8.setTransform(10.6,114.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0AE96").s().p("AALE9QAAgKAyikQAyihABgaQACgfhSgnQgngUgqgOQgegCgZAWQgWAUgGARQgFATgHAoQgHAmgBAkIgCBeQAAA4gCAaQgCAggOAuQgKiDAOiNQAbkOBthZIDRBzQgMDmhlC+QgdA8gXBMQgCgQABgDg");
	this.shape_9.setTransform(10.6,104.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0B8A5").s().p("AiOBnQAPgvACggQABgYABg4IABheQABgkAHgoQAHgoAFgSQAGgSAWgUQAagVAdABQApAOApAUQBSAngCAfQgCAagyCkQgxChgBAKQAAAEACAPQgYBPgSBgIhnAaQgeh0gKh8g");
	this.shape_10.setTransform(7.5,123.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-1,98.8,210);


(lib.JTI2_bracos2_inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BACED3").ss(0.1,1,1).p("AgcAAQAAAcAEAVQAEAVAIABQAIACAMgJQAOgIAFgcQAFgcgFgZQgGgcgOgJQgNgJgHAAQgGABgFAUQgEAVAAAdgAgaAAQAAAZADASQADASAEAAQAEAAADgSQADgSAAgZQAAgYgDgTQgDgRgEAAQgEAAgDARQgDATAAAYg");
	this.shape.setTransform(3,145.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6DDC4").s().p("AgGAAIAAgNIAIAxIgCAKgAgDgZIAAgUIAJAmQABATgBAXg");
	this.shape_1.setTransform(1.2,145.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgGArQgDgSAAgZQAAgYADgSQADgSADAAQAEAAADASQADASAAAYQAAAZgDASQgDASgEAAQgDAAgDgSgAgGgBIAGAuIACgKIgIgxgAgDgaIAJA8QABgXgBgTIgJgmg");
	this.shape_2.setTransform(1.2,145.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#BACED3","#A3B0B3"],[0,1],-0.2,0,0,-0.2,0,3).s().p("AgMBHQgIgBgEgVQgEgVAAgcQAAgdAEgVQAFgUAGgBQAHAAANAJQAOAJAGAcQAFAZgFAcQgFAcgOAIQgKAIgHAAIgDgBgAgXgrQgEATAAAYQAAAZAEASQADASAEAAQAEAAADgSQADgSAAgZQAAgYgDgTQgDgRgEAAQgEAAgDARg");
	this.shape_3.setTransform(3,145.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BACED3").s().p("AgcgdIALgCIAAA+IgLACgAASggIALABIgFA5IgMACg");
	this.shape_4.setTransform(10.6,144.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BACED3").ss(0.1,1,1).p("ABlgpIgIBUQhmgQhKAcIgRhWQBagqBvAgg");
	this.shape_5.setTransform(10.6,145.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A3B0B3").s().p("AhkgfQBagqBvAgIgIBUQhmgQhKAcg");
	this.shape_6.setTransform(10.6,145.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CF9174").ss(0.1,1,1).p("AAgkmQADBIAUA3QAVA3gMAnQBNBUgOAhQgngUhCg2QAJBNAjA4QAiA2gNBEQgMgsghgwQgcgogMgqQgSANgXg+QgWg3gpgeQgSgfgDglQAHhbAHgkAACAzQACgIACgJQADgagFgbQgFgvgbg5QgWg6gGg8AA1EKQgBAOgGAPQgfgWg2hGQg5hKgghYQgBhuAGhSAA1EKQAFglg5hLQg2hMgEhKABXDhQAIAlgRAdIgZgZ");
	this.shape_7.setTransform(15.7,172.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0B8A5").s().p("AgnDUQg5hKgghYQgBhuAGhSQADAlASAfQApAeAWA3IACAGQASAsAPABIABAAIAAAAQADAAACgCIAAAAIAAAAQgCACgDAAIAAAAIgBAAQgPgBgSgsIgCgGQgWg3gpgeQgSgfgDglQAHhbAHgkQBPg6A+AqQADBIAUA3QAVA3gMAnQBNBUgOAhQgngUhCg2QAJBNAjA4QAiA2gNBEQgMgsghgwQgcgogMgqIAEgRIABgWQAAgQgDgPQgFgvgbg5QgWg6gGg8QAGA8AWA6QAbA5AFAvQADAPAAAQIgBAWIgEARQAMAqAcAoQAhAwAMAsQAIAlgRAdIgZgZIABgGQAAglg1hFQg2hMgEhKQAEBKA2BMQA1BFAAAlIgBAGQgBAOgGAPQgfgWg2hGgAACA8IAAAAg");
	this.shape_8.setTransform(15.7,171.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8CC8E1").ss(0.1,1,1).p("ABvDDIBljDIAyh4IAihPQhFiQjTh9Qg4Byg3CiQghBigfByIg8ASIgfCaIgtBVQAsBvCXA+QB4AxAshMIAIgpIA6iCIgTg5IgRAiIgTAlQjTgFg0iCQAJgkAJgiQAGgVAFgUAj6DAIgLA4ABIF+IAPhQ");
	this.shape_9.setTransform(33.9,47);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ADCDDC").s().p("AhTE4QiXg+gshvIAshVIAgiYIA7gSQAgh0AhhiIgBAHQglDwAAAIQABApAGAUQAIATAQATQAPATAYAYQAYAXAvAEQAyAEAMgCQAdhaBMiBQAshLArg8IgyB4IhlDDIgRAiIARgiIATA5Ig7CCIAQhQIgQBQIgHApQgbAug2AAQgjAAgwgTgAi0gxQgNAaADApQADBCgQAbIgMAQQgGAJABANQAAAgAWAdQAXAdAkAMQAYALAZAJQAyASAcAAQAuAAAHgIQAHgbAWgmQAEgIAGgVQAEgRAIgIIAVgRQANgMAAgNQAAgIgKgNIgFgIIgTAlQjUgFgziAIARhGQgRAHgJATgAj0BuIAKg4gAiahLIALgpIgLApgABYD0g");
	this.shape_10.setTransform(32.3,60.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B9DBEB").s().p("AiHGuQgZgJgZgLQgjgMgXgdQgXgdAAggQAAgNAGgJIALgQQARgbgEhCQgCgrANgaQAJgTARgHIgRBGQAzCCDTAFIATglIAGAIQAKANAAAIQAAANgOAMIgVARQgHAIgEARQgGAVgEAIQgWAmgGAbQgGAIgxAAQgcAAgxgSgAgSD9QgxgEgYgXQgYgYgQgTQgPgTgIgVQgHgUAAgpQAAgIAljuIAAgHQA3iiA7hyQDQB9BFCQIghBPQgsA8gsBJQhMCDgcBaIgQABQgQAAgcgDg");
	this.shape_11.setTransform(36.8,44.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhhG3QglhzgRh7QgSiDAFiLQALkQBnhgIDYBmQACDohZDCQgZA9gTBOQgTBQgMBhg");
	this.shape_12.setTransform(16.6,116.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0AE96").s().p("AAhE7QAAgKAninQAoikAAgaQAAgfhUgiQgogSgsgKQgdAAgYAWQgVAWgFASQgEASgEApQgFAnABAkIAEBdQADA4AAAaQAAAggLAvQgSiDAFiMQALkPBnhgIDYBmQACDnhZDDQgZA+gTBNIgCgTg");
	this.shape_13.setTransform(16.6,105.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0B8A5").s().p("AiDBrQALgvAAggQAAgagDg3IgEhdQgBgkAFgoQAEgpAEgSQAFgTAVgVQAYgXAdAAQAqALAqASQBUAiAAAfQAAAagoCmQgnClAAAKIACATQgTBQgMBhIhlAgQglhzgRh7g");
	this.shape_14.setTransform(14.6,125.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,65.6,204.2);


(lib.JTI2_braco3_inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C58E73").ss(0.1,1,1).p("Ag1kNQgJgDgKgBAgHhHQgJAIgFADQgIALgIALQgGAEgGAHIATA7IAgBKQAQCdAEARQAGAPAUAFIAQh1IgQiMIhFhnABbgnIghgcQgCgBgDgBIgFgFIgPgNQgVAAgRgDQgTgCgQgHQgKgEgJgFQgcgQgSgbABbgnQAiAaAgANQAfANAfgfQgegWgWgWQgWgWgcgdQgigmgwg6QglgugzgOAiHgiQgDgDgDgDQgPgTgNgTQgYgpgChNQgWgcgBhLAiHgiQACBegaAPQgZAPgJAOQgJAQAJAKIA+gTIAqg3IAChBQgJgCgLgIAhXgJQAJAAAIgFQALgDAKgKAiHgiQAIAMADACAgeAgIACBDIgoCdQgcgCgBgwIAPhzIgHgjAhMkrQAIAPAPAPABAC3QAPAsAOAIQARAGADgDIgCjZIgUg8");
	this.shape.setTransform(75.7,178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0B8A5").s().p("AAWEgQgEgRgQidIgghKIgTg7IAMgLIAQgWIgQAWIgMALIATA7IACBDIgoCdQgcgCgBgvIAPh0IgHgjIAChBIgCBBIgqA3Ig+ATQgJgKAJgRQAJgNAZgPQAagOgCheQAIAMADABQgDgBgIgMIgGgHIgcgmQgYgpgChNQgWgcgBhLQAXgfB3AfQAIAPAPAPQgJgDgKgBQAKABAJADQAzAOAlAuQAwA6AiAmIAyA0QAWAVAeAWQgfAfgfgOQgggMgigaIghgcIgFgBIAFABIAhAcIAUA8IACDYQgDAFgRgHQgOgIgPgtIgQiLIhFhnQAFgDAJgIQgJAIgFADIBFBnIAQCLIgQB1QgUgEgGgPgAhXgBQAJAAAIgFQALgDAKgKQgKAKgLADQgIAFgJAAQgJgCgLgJQALAJAJACIAAAAgAg7hkQAJAGAKADQAQAHATACQARADAVAAIAPANIAFAGIgBgDQgBgBAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAIgPgNQgVAAgRgDQgTgCgQgHQgKgDgJgGQgcgQgSgbQASAbAcAQgAiHgZIAAAAgAgVg0g");
	this.shape_1.setTransform(75.7,177.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8CC8E1").ss(0.1,1,1).p("AhlDJIhwi+Ig5h0IgmhNQA9iUDLiIQA/BuBACfQAmBgAmBwIA9APIAnCYIAyBTQgmBwiTBGQh3A4gvhJIgJgoIhCh/IAQg6IATAhIAVAkQDTgRAriEQgKgkgKghQgIgVgGgUAgzGCIgUhPAEDCyIAOA3");
	this.shape_2.setTransform(32.5,46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADCDDC").s().p("Ag9EjIgJgoIgUhPIAUBPIhCh/IAQg6Ihwi8Ig5h2QAvA6AwBIQBTB8AiBZQAMABAxgGQAvgHAXgZQAXgZAOgUQAPgUAGgTQAGgVgCgpQgBgIgyjtIgBgHQAmBgAmByIA9APIAnCWIAOA3IgOg3IAyBTQgmBwiTBGQg0AZgmAAQgwAAgcgqgAhrBsQgIANAAAIQABANAOAMIAWAPQAHAHAGARQAGAUAFAJQAYAkAKAbQAGAIAvgDQAcgCAwgUIAwgYQAjgOAWgeQAUgegBggQgBgMgGgJQgJgJgEgHQgSgZAAhDQAAgpgOgZQgLgSgQgGIgOgpIAOApIAUBFQgrCCjTARIgVgkIgGAJgAhlBjIgTghg");
	this.shape_3.setTransform(34.4,60.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B9DBEB").s().p("AAZG5QgJgbgWgkQgFgJgHgUQgFgRgIgHIgWgPQgOgMAAgNQgBgIAJgNIAFgJIAVAkQDTgRAsiEIgVhFQARAGAKASQAPAZAAArQAABDASAZQAEAHAIAJQAGAJABAMQACAggVAeQgVAegjAOIgwAYQgwAUgdACIgXAAQgbAAgFgFgAgeEDQghhZhTh+QgwhGgvg6IgmhNQA9iUDLiIQA/BuA/CfIACAHQAyDrAAAIQACApgGAVQgGAVgOAUQgPAUgWAZQgYAZgwAHQgmAFgQAAIgGAAg");
	this.shape_4.setTransform(29.6,44.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CF9174").ss(0.1,1,1).p("ACDG0QAfh0AKh8QAKiEgNiKQgakQhthZIjRBxQAKDoBkC9QAdA8AXBMQAWBPARBgg");
	this.shape_5.setTransform(52.6,114.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0B8A5").s().p("AgBE9QgShggXhPIABgTQAAgKgxiiQgyikgBgZQgCggBSgmQApgUApgOQAegBAZAVQAWAUAGASQAFATAHAoQAGAoABAkIACBdQAAA4ABAZQACAgAOAuQgKB8gfB0g");
	this.shape_6.setTransform(55.5,123.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0AE96").s().p("AhBDHQhki+gKjmIDRhyQBtBaAaEOQANCMgKCEQgPgvgBgfQgCgaAAg6IgBhcQgBgkgHgnQgHgogFgSQgFgSgWgUQgagWgdACQgrANgnAUQhSAnACAfQABAaAxCiQAxCkABAKIgCATQgXhNgdg8g");
	this.shape_7.setTransform(52.6,104.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-1,98.2,210);


(lib.JTI2_braco1_inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CF9174").ss(0.1,1,1).p("AALkDQg/AhgUA2QgUA1gVBNQgEBAgYBAQAtAXARg/QAJgwARgRQADgbgCgdAAxCIIA2heAgvDeQALgIAKgKIBKiSAgvDeQAjgEAfgdIAeg1IAggIIA6hOQAQgYgDgiQgMiyglhpAh5EMQAWgcApg8QAghCAThAAg1gTQgCAfgJAfQgOA3gbA1Qg8BsATAhQAEADAVgbQAogQAige");
	this.shape.setTransform(48.3,175.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0B8A5").s().p("AiSEkQgTghA8hsQAbg1AOg3QAJgfACgfQACgRAAgSIgBgVIABAVQAAASgCARQgRARgJAwQgRA/gtgXQAYhAAEhAQAVhNAUg1QAUg2A/ghQBAgiAcACQAlBpAMCyQADAigQAYIg6BOIggAIIA2heIg2BeIgeA1QgfAdgjAEQALgIAKgKIBKiSIhKCSQgKAKgLAIQgiAegoAQQAWgcApg8QAghCAThAQgTBAggBCQgpA8gWAcQgTAYgFAAIgBAAgAAxCIg");
	this.shape_1.setTransform(48.3,175.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8CC8E1").ss(0.1,1,1).p("AhuDDIhljDIgyh4IgihPQBFiQDTh9QA4ByA3CiQAhBiAfByIA8ASIAfCaIAtBVQgsBviXA+Qh4AxgshMIgIgpIgPhQAhHF+Ig6iCIATg5IARAiIATAlQDTgFA0iCQgJgkgJgiQgGgVgFgUAD7DAIALA4");
	this.shape_2.setTransform(29.6,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADCDDC").s().p("AhQEdIgHgpIgQhQIAQBQIg7iCIATg5IhljDIgyh4QArA8AsBLQBMCBAdBaQAMACAygEQAvgEAYgXQAYgYAPgTQAQgTAHgTQAIgUAAgpQAAgIgljwIgBgHQAhBiAgB0IAKApIASBGQgzCAjTAFIgUglIgRgiIARAiIgFAIQgKANAAAIQAAANANAMIAWARQAGAIAFARQAGAVAEAIQAWAmAHAbQAHAIAuAAQAcAAAygSQAZgJAYgLQAkgMAXgdQAWgdAAggQABgNgGgJIgMgQQgQgbADhCQADgpgNgaQgJgTgSgHIgKgpIA7ASIAgCYIAsBVQgsBviXA+QgwATgkAAQg1AAgbgugAD1BuIgKg4g");
	this.shape_3.setTransform(31.3,60.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B9DBEB").s().p("AAEG4QgGgbgWgmQgEgIgGgVQgEgRgHgIIgVgRQgOgMAAgNQAAgIAKgNIAGgIIATAlQDTgFAziCIgRhGQARAHAJATQANAagCArQgEBCARAbIALAQQAGAJAAANQAAAggXAdQgWAdgkAMQgZALgZAJQgxASgcAAQgxAAgGgIgAgoD/QgdhahMiDQgshJgsg8IghhPQBFiQDRh9QA6ByA2CiIABAHQAlDuAAAIQAAApgHAUQgHAVgQATQgQATgXAYQgZAXgxAEQgcADgQAAIgPgBg");
	this.shape_4.setTransform(26.8,44.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CF9174").ss(0.1,1,1).p("ABiG3QAlhzARh7QASiDgFiLQgLkQhnhgIjYBmQgCDoBZDCQAZA9ATBOQATBQAMBhg");
	this.shape_5.setTransform(46.9,116.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0B8A5").s().p("AgXE5QgMhhgThQIACgTQAAgKgnilQgoimAAgaQAAgfBUgiQAqgSAqgLQAdAAAYAXQAVAVAFATQAEASAEApQAFAogBAkIgEBdQgDA3AAAaQAAAgALAvQgRB7glBzg");
	this.shape_6.setTransform(48.9,125.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0AE96").s().p("AhODDQhZjDACjnIDYhmQBnBgALEPQAFCMgSCDQgLgvAAggQAAgaADg4IAEhdQABgkgFgnQgEgpgEgSQgFgSgVgWQgYgWgdAAQgsAKgoASQhUAiAAAfQAAAaAoCkQAnCnAAAKIgCATQgThNgZg+g");
	this.shape_7.setTransform(46.9,105.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,65.6,206.4);


(lib.JTI2_boca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhigJQAcAOAqgBIAfAAQA3gFAlglQgyAogogMIgRAGIgRgEQgWANgvgOgAhhgQQgJgBgDAIAg9AnQAsAPAzgTABagtQALgCAJAK");
	this.shape.setTransform(11,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF9174").s().p("AhgAHQAwAPAVgPIASAEIAQgFQAnAOAzgpQgmAjg2AHIgfAAIgFABQgmAAgbgPg");
	this.shape_1.setTransform(10.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0AE96").s().p("AgXAUIgYgjQAtAPAxgTIgjAng");
	this.shape_2.setTransform(9.6,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhGgHQAXAHAWAFQAgAGAggJQAVgEAUgNQALgEAIgGQgWAMgYgDIgbgGIgSAFIgRgEQgkAMgQgCQgTACgQgIQALAHAPADQAYAEAjgGIARAFIARgFQAhADAYgJAgsAnQAsAQAzgUABegtQAQAHAIASAhegkQgNAGgKAT");
	this.shape_3.setTransform(10,4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCCC").s().p("AggABQAagHAmAGQgSADgSAAQgOAAgOgCg");
	this.shape_4.setTransform(10.6,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0AE96").s().p("AgYAuIgYglQAsAPAygTIgjApgAhKgmQAXAEAjgFIASAEIARgFQAgAEAYgJQgUAMgVAGQgmgFgaAIQgVgEgXgKg");
	this.shape_5.setTransform(10.4,7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C58E73").s().p("AgMAGQgjAFgYgEQgPgDgLgFQAQAGATgCQAQACAkgKIARAEIASgFIAbAGQAYABAWgKQgJAHgKACQgYAJghgEIgRAFg");
	this.shape_6.setTransform(10.1,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D19861").ss(0.1,1,1).p("AhZgSQAPAVAQALQAGADAFACQAIADAIABQAfAEAkgHQAKgCAJgEQADgCAEgDQARgKALgX");
	this.shape_7.setTransform(9.8,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhfgYQAEACADACQAJAEALACQAXADAjgFIARAFIAQgFQAcADAWgGQAJgDAJgEQAEgDAEgDQgWAMgXgDIgcgGIgRAFIgSgEQgjAMgQgCQgSACgRgIgAgsAvQAsAPAygTABmg1QARAHAIASAhmguQgOAHgKAT");
	this.shape_8.setTransform(9.7,4.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCCCC").s().p("AggADQAfgKAiAHQgZADgZAAIgPAAg");
	this.shape_9.setTransform(10.1,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAUQgHgBgIgDIABgFIALABIAGABQAhABAggEIAGgBIALgBIACADQgKAEgJACQgYAEgTAAIgZgBgAg6gGIgMgJQAXADAigFIASAFIAQgFQAcADAWgGIgIALQgmAGgaAAQgdAAgcgDg");
	this.shape_10.setTransform(9.9,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0AE96").s().p("AgVA4IgYgmQAsAQAygUIgjAqgAg6gPQgQgLgPgXQAJAEALACIANAKQAbACAdABQAaAAAmgHIAIgLIASgHQgLAXgRAMIgHAFIgCgDIgLACQgqgOgjARIgLgBIgBAEIgLgFg");
	this.shape_11.setTransform(9.8,7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C58E73").s().p("AgMAFQgiAFgXgDQgLgCgJgEIgHgCQAQAGATgCQAQACAjgKIARAEIASgFIAbAGQAYABAVgKIgIAGIgRAFQgWAGgcgDIgRAFg");
	this.shape_12.setTransform(9.8,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#D19861").ss(0.1,1,1).p("AhggTQAQAWARAMQAGADAGADQAIADAJABQAiAEAmgHQALgCAKgFQAEgCAEgDQASgLAMgZ");
	this.shape_13.setTransform(9.8,4.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhmgeQADACAEACQAKAFAMACQAZAEAkgGIATAFIASgFQAeADAXgHQAKgDAJgEQAFgDAEgEQgXANgZgDIgegGIgTAFIgSgEQgnANgRgCQgUACgRgJgAgsA0QAsAQAygUAhvgyQgOAGgKATABvg6QARAHAIAS");
	this.shape_14.setTransform(9.7,5.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCCCC").s().p("AgiADQAhgLAlAIQgdADgbAAIgOAAg");
	this.shape_15.setTransform(10.2,6.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjAWQgJgBgIgEIABgFIAMACIAHAAQAjABAjgEIAGgBIAMgBIACADQgKAEgLACQgaAFgVAAIgZgBgAg+gGIgNgKQAZAEAkgGIATAFIASgFQAeADAXgHIgIAMQgpAHgdAAQgfAAgdgDg");
	this.shape_16.setTransform(9.9,5.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0AE96").s().p("AgVA9IgYglQAsAPAygTIgjApgAg+gSQgSgLgQgZQAKAFAMACIANAKQAdADAgAAQAcAAApgHIAJgMQAJgDAKgFQgMAZgSANIgIAFIgCgCIgMABQgtgOglARIgNgBIgBAFIgLgGg");
	this.shape_17.setTransform(9.8,8.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C58E73").s().p("AgNAFQgkAHgagEQgLgCgKgFIgHgCQARAHAUgCQARACAmgMIATAFIASgFIAfAGQAYABAXgLIgIAGQgJAEgKACQgYAHgegEIgSAGg");
	this.shape_18.setTransform(9.9,2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhtgiQAEADAEACQAKAFANACQAaAFAmgHIAUAGIATgGQAfAEAZgIQAKgDAKgGQAEgDAFgEQgZAPgagEIgfgHIgUAGIgTgFQgoAPgSgCQgVACgTgKgAgtA5QAsAPAygTAB1g/QAQAHAIASAh1g2QgNAGgKAT");
	this.shape_19.setTransform(9.8,5.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D19861").ss(0.1,1,1).p("AhkgWQAQAaATANQAGAEAGADQAIAEAJABQAkAFAogIQAMgDAKgFQAEgDAEgDQATgNAMgd");
	this.shape_20.setTransform(9.8,4.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCCCC").s().p("AgrAFQApgTAuAPQgeAEgeAAIgbAAg");
	this.shape_21.setTransform(10.2,6.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C58E73").s().p("AgOAGQgmAHgagFQgNgCgKgEIgIgEQATAIAVgBQASACAogNIATAEIAUgGIAfAHQAaACAZgNIgJAIQgKAEgKADQgZAHgfgEIgTAHg");
	this.shape_22.setTransform(9.8,2.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglAZQgJgCgIgDIABgGIAMABQAtADAqgGIANgCIACADQgKAGgMACQgaAGgWAAQgOAAgOgCgAhBgIIgOgMQAaAFAmgHIAUAGIATgGQAgAEAYgIIgJAOQgqAIgfAAQghAAgegEg");
	this.shape_23.setTransform(9.9,5.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0AE96").s().p("AgVBCIgYglQAsAPAygUIgjAqgAhBgPQgTgOgQgcQAKAEAMADIAOAMQAfADAgABQAfAAAqgIIAJgOQALgDAJgGQgMAdgTAPIgIAGIgCgEIgMADQgwgSgnAVIgNgBIgBAGIgMgHg");
	this.shape_24.setTransform(9.8,8.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#D19861").ss(0.1,1,1).p("AhkgTQAQAWATAMQAGAEAGADQAIADAJABQAkAEAogHQAMgCAKgFQAEgDAEgDQATgLAMga");
	this.shape_25.setTransform(9.8,4.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhsgeQAEACAEADQAKAEAMACQAbAEAmgGIATAFIATgFQAgADAYgHQALgDAJgFQAFgDAEgDQgYANgbgDIgfgHIgTAGIgUgEQgoANgSgCQgVACgSgJgAgtA2QAsAPAygTAhxgzQgNAGgKATABxg8QAQAHAIAS");
	this.shape_26.setTransform(9.8,5.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCCCC").s().p("AgrAEQApgQAuANQggAEgfAAIgYgBg");
	this.shape_27.setTransform(10.2,6.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E0AE96").s().p("AgVA+IgYglQAsAQAygUIgjApgAhBgSQgTgMgQgYQAKAEAMACIAOALQAfADAgAAQAfAAAqgIIAJgLQALgEAJgFQgMAagTANIgIAGIgCgDIgMACQgwgQgnATIgNgBIgBAFIgMgHg");
	this.shape_28.setTransform(9.8,8.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglAWQgJgBgIgDIABgFIAMABQAtACAqgGIANgBIACADQgKAFgMACQgbAFgXAAIgagCgAhBgHIgOgKQAaAEAmgGIAUAFIATgFQAgADAYgHIgJAMQgqAIgfAAQghAAgegEg");
	this.shape_29.setTransform(9.9,5.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C58E73").s().p("AgOAGQgmAFgagEQgNgBgKgFIgIgCQATAGAVgBQASABAogLIATAFIAUgGIAfAGQAaACAZgLIgJAGQgKAEgKACQgZAHgfgDIgTAFg");
	this.shape_30.setTransform(9.8,2.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#D19861").ss(0.1,1,1).p("AhkgSQAQAVATALQAGAEAGACQAIADAJABQAkAEAogHQAMgCAKgEQAEgDAEgCQATgKAMgY");
	this.shape_31.setTransform(9.8,4.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhtgcQAEACAEACQAKAEANACQAaAEAmgGIAUAFIATgFQAfADAZgGQAKgDAKgEQAEgDAFgDQgZAMgagDIgfgGIgUAFIgTgEQgoAMgSgBQgVABgTgIgAgtAzQAsAPAygTAhrgwQgNAGgKATABrg5QAQAHAIAS");
	this.shape_32.setTransform(9.8,5.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0AE96").s().p("AgVA8IgYgmQAsAQAygUIgjAqgAhBgSQgTgLgQgXQAKAEAMACIATAQQAaACAgAAQAeAAAngGIANgRQALgDAJgFQgMAYgTAMIgIAFIgCgFQgFADgXAAIgxABIgigBIgCAHQgGgCgGgDg");
	this.shape_33.setTransform(9.8,8.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AglAUQgJgBgIgDIABgHIAjAAIAxAAQAWgBAGgDIACAGQgKAEgMACQgaAFgXAAIgbgCgAg8AAIgTgQQAaAEAmgGIAUAFIATgFQAgADAYgGIgOASQgmAEgeAAQghgBgZAAg");
	this.shape_34.setTransform(9.9,5.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C58E73").s().p("AgOAFQgmAFgagDQgNgCgKgEIgIgCQATAGAVgBQASABAogKIATAEIAUgFIAfAGQAaABAZgKIgJAGQgKADgKACQgZAGgfgDIgTAFg");
	this.shape_35.setTransform(9.8,2.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#D19861").ss(0.1,1,1).p("AhkgRQAQAUATAKQAGADAHADQAHACAKABQAjAEAogGQALgCAKgEQAEgDAFgCQASgKANgW");
	this.shape_36.setTransform(9.9,5.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhrgWQAEACADACQALADAMACQAaAEAlgFIAUAEIATgFQAfADAYgGQAKgCAKgEQAEgDAFgDQgYALgbgCIgegGIgUAFIgTgEQgoAMgSgCQgUABgSgHgAguArQAsAQAygUABkgxQAQAHAIASAhkgsQgNAHgKAT");
	this.shape_37.setTransform(9.9,5.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCCCCC").s().p("AgyAAIBigBIAEACIhoABg");
	this.shape_38.setTransform(10.2,6.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E0AE96").s().p("AgVA1IgZglQAsAPAzgUIgjAqgAhBgOQgTgKgQgWQALAEAMABIASASIASACIgGAAIgBAEIgEAIIgNgFgAA4gSIgFgEQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAgBAAIATgDIANgTQALgDAKgEQgNAWgTAMIgIAEg");
	this.shape_39.setTransform(9.9,8.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AglATQgIgBgIgDIAEgIIBogBIAFAEQgKAEgLACQgaAFgVAAQgPAAgOgCgAgqACIgSgBIgSgQQAaAEAmgFIATAEIATgFQAfADAYgGIgNAUIgTABQABAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAIhiABIAGgBg");
	this.shape_40.setTransform(10,5.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C58E73").s().p("AgOAFQgmAFgagEQgMgBgKgEIgHgCQARAFAVgBQASACAogJIATADIATgFIAfAGQAaAAAYgIIgIAFQgKADgKACQgYAFgfgDIgTAGg");
	this.shape_41.setTransform(9.9,3.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#D19861").ss(0.1,1,1).p("AhWgNQAOAPAQAIQAFADAGACQAHABAHABQAfADAigFQAKgBAJgDQADgCAEgCQAQgHALgR");
	this.shape_42.setTransform(9.9,4.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhcgTQAEABADACQAJACAKACQAXADAhgEIAQADIARgEQAbADAVgFQAJgCAIgDQAEgCAEgCQgVAIgXgCIgYgHIgkABQgjAMgPgBQgSAAgQgFgAgtAoQAtAEAygIABagpQARAHAIASAhaglQgOAHgKAT");
	this.shape_43.setTransform(9.8,5.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCCCCC").s().p("AgrAAIBUgBIAEACIhZABg");
	this.shape_44.setTransform(10.2,5.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E0AE96").s().p("AgWAyIgYgmQAtAFAxgJIgjAqgAg4gTQgQgIgOgRIATAFIAQANIAQABIgFABIgBADIgEAHIgLgFgAAwgWIgEgEIgDAAIARgCIALgQIASgEQgLAQgQAKIgHADg");
	this.shape_45.setTransform(9.9,8.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgfAPIgPgDIAEgGIBagBIAEADQgJADgKACQgVADgTAAIgYgBgAgkACIgPgBIgQgMQAWADAhgEIAQADIARgEQAbADAUgFIgLAPIgRABIADAAIhUABIAFAAg");
	this.shape_46.setTransform(10,5.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C58E73").s().p("AgMAEQggAEgXgCIgUgFIgGgBQAQADARAAQAQABAjgKIAjgBIAZAHQAWABAVgHIgHAFIgSACQgUAFgcgCIgQADg");
	this.shape_47.setTransform(9.9,3.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#C58E73").ss(0.1,1,1).p("AguACQAugIAwAG");
	this.shape_48.setTransform(10,8.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#D19861").ss(0.1,1,1).p("ABPgFQABgBACgBAhRACQAPAFAPAAQAMABAMgCQAZgGAVAEQAQADALgCQADgBADgBQALgDAPgF");
	this.shape_49.setTransform(10.5,4.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CF9174").ss(0.1,1,1).p("ABTADIgDAAQgIAAgKAAQgFgBgGAAIgYgFIgjABQgdAHgPABQgEAAgDAAQgLABgLACQgDABgBABIABABQACABADAAQAEAAAFABQAKAAAMgBQAQgCAVgEIARAEIAQgEQAXABAOAAQAPgBAGgBQADAAACgBQAAAAABAAQABgCgEAAQACAAADAAAhPANIAFABAhRAJQgCABgCAAQAAAAAAABABUgNQARAHAIAQAhUgJQgOAGgKAR");
	this.shape_50.setTransform(9.8,3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgxAGIgEgGQAQAAAVgEIARADIAQgEIAlABIgGAHQgLACgQgDQgVgCgYAEQgJACgJAAIgHAAg");
	this.shape_51.setTransform(10.3,4.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E0AE96").s().p("AgZAsIgZgfQAwgKAvAHIgjAigAhOggIgFgBIAJABIAWgBIADAGQgOAAgPgFgAA3gmIAVgCIAFgBIgaAKIgHACgABOgrIAGAAIgDACQABgBAAAAQAAAAgBAAQAAgBgBAAQgBAAgBAAg");
	this.shape_52.setTransform(10.3,7.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C58E73").s().p("AhPAJIgFgBIgBgBIAEgDQALgCALgBIAHAAQAPAAAdgIIAjgBIAYAHIALABIASAAIACAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAAAIgBAAIgFABIgVACIglgBIgQAEIgRgEQgVAFgQABIgWABIgJAAg");
	this.shape_53.setTransform(9.8,3.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CF9174").ss(0.1,1,1).p("AgigGIAAAAQAKgBALgCIAigBQAMACALAAQAQAFAJAFAAsgIQAOABAZgJQgIABgYgDIgbgIQgSgFgRAHQgkAPgQgCQgRABgDAAQAZAIAYgEAhHAGQAPgIAWgEAgzAkQAxgbA6AWABPgjQARAHAIASAhPggQgOAHgKAT");
	this.shape_54.setTransform(9.9,5.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E0AE96").s().p("AgXASIgegUQAygbA5AWIgrAZg");
	this.shape_55.setTransform(10.1,9.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C58E73").s().p("AhTAGIAVgBQAQACAkgNQARgHARAFIAcAIQAYABAIgBQgZAJgPgBIgWgCIgjABIgUADIgBAAIgQABQgQAAgRgFg");
	this.shape_56.setTransform(9.8,3.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#CF9174").ss(0.1,1,1).p("AghABIABAAQAJgBALgBIAjAAQALABAMAAQAHABAEADAAuAAQAXgBAWgNQgKADgZgBIgfgFQgHgCgLAFQgIgFgYAGQgYAGgLAAQgLAAgNgCQACABADACQAfAJAPgCAgzAFQAHgCALgCAgyAmQAygHA1ACABUglQARAIAIASAhUgdQgOAGgKAT");
	this.shape_57.setTransform(9.7,4.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E0AE96").s().p("AgVARIgegcQAzgHA0ADIgmAgg");
	this.shape_58.setTransform(9.8,9.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C58E73").s().p("AhSAAIgFAAIAZAAQAKAAAZgEQAYgGAHAFQAMgFAHACIAfAFQAZAAAJgDQgWAMgXABIgXgBIgiAAIgVADIAAAAIgGABQgPAAgagKg");
	this.shape_59.setTransform(10,3.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CF9174").ss(0.1,1,1).p("AhbgKQAcAOAqgBIAfAAQA2gFAdgYQgqARgngCIgRAGIgRgEQgTAHgygIgAg2AmQAvAEAvgIABYgmQALgCAJANAhbgYQgMAGgEAK");
	this.shape_60.setTransform(10.3,4.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CF9174").s().p("AhcAAQAyAIATgHIASAEIAQgFQAoABAqgPQgdAWg3AHIgfAAIgFAAQgmAAgbgPg");
	this.shape_61.setTransform(10.4,3.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E0AE96").s().p("AgWARIgZgeQAvAFAvgJIgfAjQgWgBgQAAg");
	this.shape_62.setTransform(9.6,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},4).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},2).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},2).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},2).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},2).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,24,13.4);


(lib.JTI2_corpo_inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8CC8E1").ss(0.1,1,1).p("AC9gIQi0AZjFgsIAAAYQDIAyCxgdg");
	this.shape.setTransform(26.7,93.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADCDDC").s().p("ABFCZQgmgIgLgEIgjgNQgXgHgWgOQgcgSgVhfQgShOAAg0QAAgOABgJIABAAQgCAGATAMIAqAZQAZAQAMA5QAOBCAGAJQAJATAMALQAVATAtAWQAKAGAVARIATARIgJAJQgJAIgCAAIgngHg");
	this.shape_1.setTransform(20.6,111);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#E0E0E0"],[0.329,1],0,0,0,0,0,0.8).s().p("AgDABIgCgBIAAAAIAEAAIAAAAIABABIACgBIAAAAIAAAAIAEAAQAAAAAAAAQgBAAAAAAQAAAAgBABQgBAAgBAAIgCAAIgDAAg");
	this.shape_2.setTransform(62,134.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#C5A487","#6D5E34"],[0,1],0.2,0,0,0.2,0,0.6).s().p("AgBABIAAgBIAAAAIABAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIABAAIAAAAIAAABIgCAAIgBAAg");
	this.shape_3.setTransform(62,134.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6F4029").s().p("AACAEQACgEACgEQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIgCADQgCACAAACQAAAEgFAFIABgFgAgJAAQgBgEAFgDQAEgBACABQgIACgBAFIgBAAg");
	this.shape_4.setTransform(62.4,129.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A3E50").s().p("AAHACIABgCIAAgBIABAAQABAAADACIABABgAgIACQgCgCgDAAQAFgDAHAFg");
	this.shape_5.setTransform(60.6,141.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B9DBEB").s().p("AANAUIgBAAQgDgFgCAAIAAAAIADgDIAPgPIgBgQQAEAKAIAJIgBACIARAMIAAAGgAgPASIgDACIgOAAIgFgSIgBgCIACgEIADAJIADgNQAEgLAEgBIgDAMQADAIAHAEQAKAKACAGQgGgHgGAFgAgzAUIAAgLIAMgHIAFASg");
	this.shape_6.setTransform(60.8,139.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ADCDDC").s().p("AgKAWIACgDQADABADACgAgbAWIgEgSIABgBIAFATgAAfgFIgEgPIAEADIACAQIgQAPQAJgLAFgIgAgcgCIAKgTIADAAIAAADQgDABgFAKIgDAOg");
	this.shape_7.setTransform(60.1,139.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996D57").s().p("AADAAIAAAAIAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgCAAgAgEAAQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAIgCAAIgCAAg");
	this.shape_8.setTransform(60.6,135.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("AgEAAIgBAAIAAAAIACAAgAAEAAIACAAIAAAAIAAAAIgBAAg");
	this.shape_9.setTransform(60.7,134.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#E0E0E0"],[0.329,1],0.1,0,0,0.1,0,0.8).s().p("AgCABIgDgBIAAAAIAEAAIAAAAIABAAIAAABIACgBIABAAIADAAIAAAAIAAABIgCAAIgEAAIgCAAg");
	this.shape_10.setTransform(59.4,134.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E5CCB3").s().p("AAMAAIAAAAIAAAAIABAAIAAAAgAgMAAIABAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(60.8,134.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#302819").s().p("AALAAIAAAAIAAAAIABAAIABAAIABAAIAAAAIgBAAIAAAAIAAAAIABAAIgBAAIgBABIgBgBgAgMAAIgBAAIABAAIAAAAIACAAIgBAAIABAAIAAAAIgBAAIgBAAg");
	this.shape_12.setTransform(60.7,134.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#C5A487","#6D5E34"],[0,1],0.2,0,0,0.2,0,0.6).s().p("AgBAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIABAAIgBAAIgBABIgBgBg");
	this.shape_13.setTransform(59.4,134.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A68B6A").s().p("AAAAAIAAAAIAAAAg");
	this.shape_14.setTransform(59.6,134.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AATABIgEgBIAAAAIACAAIADABgAAGAAIACAAIABAAIABAAIAAAAIgEABgAgIAAIAAAAIABAAIACABIgDgBgAgQAAIACAAIAAAAIgFAAg");
	this.shape_15.setTransform(60.7,134.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CF9174").s().p("AgBAPQgGAAgEgFQAGAEAEgBIABABIABgBQACACAFgCQgCACgFAAIgCAAgAAFgIIABgBIACABIAHAAQABAAABAAQABAAAAgBQAAAAABAAQAAAAAAAAIABAAIAAAAQgCACgEAAQgFAAgEgBgAgNgHIgGgCIAAgBIAAAAIABAAIADACIAIAAIACAAIABAAIgGABIgDAAgAgFgJIgCgDIgCAAIgEAAIgDAAIgCAAIgBACIACgDQAFgCAGACIADAFgAAHgNQAGgCAFACIACAEIgBgCIgCgBIgCAAIgFAAIgCABIgCABIgCACIADgFgAAUgJg");
	this.shape_16.setTransform(60.7,135.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#504229").s().p("AAMAAIAAAAIAAAAIABAAIAAAAgAgLAAIgBAAIABAAIAAAAIAAAAIAAAAg");
	this.shape_17.setTransform(60.8,134.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#85714A").s().p("AAKAAIAAAAIABAAIAAAAIgBAAgAAOAAIgBAAIACAAIAAAAIgBAAgAgKAAIAAAAIAAAAIgBAAIACAAIAAAAgAgOAAIAAAAIACAAIAAAAIgCAAg");
	this.shape_18.setTransform(60.7,134.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1B160E").s().p("AAMAAIgBAAIAAAAIACAAIAAAAIgBAAgAgLAAIgBAAIAAAAIAAAAIAAAAIABAAIABAAg");
	this.shape_19.setTransform(60.7,134.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3F271B").s().p("AAUAFIgDgBIgCgBIgBAAIgDAAIgBAAIgBABIgBAAIgCABIACgCIACAAIAFAAIACAAIACABIABACgAgFAFIgCgCIgBAAIgCAAIgCAAIAAAAIgCAAIgCAAIgDABIAAABIABgCIACgBIADAAIAEAAIACABIACACgAATAAQgHgBgGABIgBAAIAAgDIABgBQAHgBAHABIADAFgAgTgEQAHgBAGABIACABIAAADIgCAAQgFgBgIABIgDAAQAAAAADgEg");
	this.shape_20.setTransform(60.7,133.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D19D84").s().p("AgBAJIgDABIgDgDIAGgCQABAAAAAGQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAgAgEAIIACAAIABgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAgAADAHIAAABIACAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIAAgBIADABIgBADQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBABgAADACIAAgCIgBgHIACALgAAYAAIABgBIAAgDIAAgBIACgFIABAAIABACIgDADQAAAFgBAAIgBAAgAgZgDIgDgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIACAFIABACIABABIgBABIgBgDg");
	this.shape_21.setTransform(60.6,135.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#442C20").s().p("AAAAUIgCgJIgEgXQABgGAFgEIAHAHQgEAIgDAEQAAAEAAAJIAAANg");
	this.shape_22.setTransform(58.2,132.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0B8A5").s().p("AAAA3IAAgEQgJgMgEgZIAFAEIAFADQAGABAFgBIAJgKIgLAIQgGgBgFABIgHgHIgBgBQgFgIABgEIgBgGIgBgHIgCgIIADgCQAHgBAGABIACAAIAAgEIgCgBQgGgBgHACQgEAEABACIgBgIQABgKAEgHIAGAAQAFgBAGAHQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIgCADQACgDAEAAQAJgBADgIQACAGAFAGQAAAJAAAGIAAAHIAAAAIAAABIAAAEIAAADIgBACIAAAFIAAAHQgBACgCADIgDACIgBACQAAAXgIAKIgDAKIAAABgAAAAOIADAAIACgDQgFABgDgCgAAAAHQAGABADgCQgFABgCgBIgCAAIgBgBQgDACgGgFQADAGAHgBgAAAAAQAAgEgBABIgGABIADACIADAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAgAADgJIAAACIAAAEIAAABIAAAAIAAAAIgDACQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIABgCIgCgDIgCgNIABAJgAgCgJIgEAEIgBADIACgDIABAAIACgCIABgFIAAgJIgBgGQACAOgCAEgAAHgVIgCAFIABAAQAEACAEAAQAFgBACgCIgCgDIgGgCIgGABgAgRgVIgCADIABABIAGACQAEABAFgCIABAAIgDgEIgHgCIgFABgAAYgVIgDgHQgIgCgGABIgBABIAAAEIABAAQAGgBAHABIAEADIAAAAgAgcgXIABADQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIAAgFgAAcgUIgBgBIACgDIAAADIAAACIgBgBg");
	this.shape_23.setTransform(60.6,136.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0AE96").s().p("AAGA3IAAAAIADgKQAIgLABgXIABgBIACgDIABAEIADAPQgEAKgJALIgDADIAAAAIAAAAIgBADIgBACgAgBA3QgCgGgKgKQgHgGgDgJIADgLIAAgDIABgEIgBgFIgBgIQgBAFgEgDQAAgDgCgFQgEgGABgFQABgIAEAFIACAKIACADIgBgOQgBgIABgGQAEgFAEgHIAHAEQAGAEACAFQgFgHgFABIgGAAQgFAHgBAKIABAIIACAIIACAHIAAAGQgBAEAFAIIABABIAHAHQAFgBAGABIAMgIIgKAKQgEACgHgCIgEgCIgGgFQAEAZAJAMIABAEgAgbgRIACAEQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAIgBgCIAAgCIgCgFIgCgDIABAGgAAAAPIgDgFQAEADAEgCIgCAEgAADgCIAAgBIAAgDIABABIACADgAgGgFIAEgEQACgEgCgNIABAFIABAJIgBAFIgDACIgBAAIgCADgAAYgFIABgFQABAAABgFIACgDIAAgDIAAgDIgBADIgCAFIgBABIABgDIAAgCIAAAAIABgDIABgFQADgFABAGQABAGgEAHIgCAIIgCABIgBAAg");
	this.shape_24.setTransform(60.6,136.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#623A26").s().p("AAHAFQAFgFgFgEQgFgGgHgCIgCgBIgFgBQADABAEgBQAFgBAEADQAEADACAEIABABIABADQACAFgEAFQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAgEAFgGg");
	this.shape_25.setTransform(60.3,130.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5B3826").s().p("AgIAHIgHgFIgIgFIgFgGQAFAEAFABQAEAAAFAEQAFACAEANQgCgFgGgDgAACAMQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAGgEACgIQACgHAFgDQADgCAEABQgCABgDADQgDAEgBAGIgCADQgDAIgJABQgEgBgCAEIACgDg");
	this.shape_26.setTransform(60.6,130.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#513324").s().p("AAYAVQgBgHAAgJQgFgFgBgFQAFgFAAgFQAAgDACgCQgCAGAIAOQABABgBADIgCAFIgCAKIgBAFIgBADIAAgGgAgLgKQgEgDgFgBQgEAAgGgFQAKAEAIgHIADABQAIABADAHQAGAGgFAFQgDADAAAFQgGgMgFgEgAAHgLIgBgCQABgIAKgBIADAAQgEACgCAHQgCALgHACQAFgEgDgHgAAAgWIgFgEIAHABQAFAAACADQgFACABAFQgCgEgDgDg");
	this.shape_27.setTransform(60.8,131.3);

	this.instance = new lib.logoJTI();
	this.instance.parent = this;
	this.instance.setTransform(60.8,151.8,0.033,0.033,0,0,180,81.1,61.2);

	this.instance_1 = new lib.logoJTI();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.1,70.6,0.017,0.017,0,0,180,83.8,60.7);
	this.instance_1.filters = [new cjs.ColorFilter(0.2, 0.2, 0.2, 1, 204, 204, 204, 0)];
	this.instance_1.cache(-2,-2,166,125);

	this.instance_2 = new lib.logoJTI();
	this.instance_2.parent = this;
	this.instance_2.setTransform(48.3,81.9,0.017,0.017,0,0,180,83.8,60.7);
	this.instance_2.filters = [new cjs.ColorFilter(0.2, 0.2, 0.2, 1, 204, 204, 204, 0)];
	this.instance_2.cache(-2,-2,166,125);

	this.instance_3 = new lib.logoJTI();
	this.instance_3.parent = this;
	this.instance_3.setTransform(52.4,93.1,0.017,0.017,0,0,180,83.8,60.7);
	this.instance_3.filters = [new cjs.ColorFilter(0.2, 0.2, 0.2, 1, 204, 204, 204, 0)];
	this.instance_3.cache(-2,-2,166,125);

	this.instance_4 = new lib.logoJTI();
	this.instance_4.parent = this;
	this.instance_4.setTransform(77.6,61.6,0.02,0.02,0,0,180,83,60.4);
	this.instance_4.filters = [new cjs.ColorFilter(0.2, 0.2, 0.2, 1, 204, 204, 204, 0)];
	this.instance_4.cache(-2,-2,166,125);

	this.instance_5 = new lib.logoJTI();
	this.instance_5.parent = this;
	this.instance_5.setTransform(73.4,71,0.02,0.02,0,0,180,83,60.4);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_5.cache(-2,-2,166,125);

	this.instance_6 = new lib.logoJTI();
	this.instance_6.parent = this;
	this.instance_6.setTransform(69.8,79.8,0.02,0.02,0,0,180,83,60.4);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_6.cache(-2,-2,166,125);

	this.instance_7 = new lib.logoJTI();
	this.instance_7.parent = this;
	this.instance_7.setTransform(66.2,89.9,0.02,0.02,0,0,180,83,60.4);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_7.cache(-2,-2,166,125);

	this.instance_8 = new lib.logoJTI();
	this.instance_8.parent = this;
	this.instance_8.setTransform(63.3,99.8,0.02,0.02,0,0,180,83,60.4);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_8.cache(-2,-2,166,125);

	this.instance_9 = new lib.logoJTI();
	this.instance_9.parent = this;
	this.instance_9.setTransform(56.5,102.4,0.017,0.017,0,0,180,83.8,60.7);
	this.instance_9.filters = [new cjs.ColorFilter(0.2, 0.2, 0.2, 1, 204, 204, 204, 0)];
	this.instance_9.cache(-2,-2,166,125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#999999").ss(0.1,1,1).p("Ag+gIIB9AAAg+AJIB9AA");
	this.shape_28.setTransform(60.9,146.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#CCCCCC").ss(0.1,1,1).p("AgRiIIAAhTIAkAAIAABTIASAYIBBAAIAAFMIjLAAIAAlMIA+AAAgVhwIALgLIAVAAIALALIAPAAAgVhwIAAAQIArAAIAAgQAgRiIIgWAYIASAAAgyBSIBmAAIAAiIIhmAAgAgRiIIAkAA");
	this.shape_29.setTransform(60.8,133.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006C4C").s().p("AgQADIAQgyIARAjIgEARIgCAKIgGAhIgVgtg");
	this.shape_30.setTransform(58.4,106.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhlCmIAAlMIA/AAIARAAIAAAQIArAAIgBgQIAQAAIBBAAIAAFMgABABYIh8AAgABABFIh8AAgAA1AcIAAiHIhnAAIAACHIBnAAgAA1AcIhnAAIAAiHIBnAAIAACHgAgyAcg");
	this.shape_31.setTransform(60.8,138.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgVANIAAgOIAMgLIATAAIALALIABAOg");
	this.shape_32.setTransform(60.8,122.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCCCCC").s().p("AAXA1IgLgLIgUAAIgMALIgRAAIAVgZIAAhQIAkAAIAABQIASAZgAAUAcIgkAAg");
	this.shape_33.setTransform(60.6,116.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00805B").s().p("Ai3hxQAIgNAGgNIAKgYQAvC3BTCuIgSA1QhWiqgyi+gACKjIIALgYIAKgVQAIAKAIANIAJAOIgLAbQgTgNgQgGg");
	this.shape_34.setTransform(61.4,82.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009A6E").s().p("AhiD2IAHghIACgKIADgTIADgKQAtjJBljaQARAFATANIgqBfQhWC/gfC7g");
	this.shape_35.setTransform(68.9,86.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0000FF").ss(0.1,1,1).p("AABACQgBgCAAgB");
	this.shape_36.setTransform(54.2,54.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#8CC8E1").ss(0.1,1,1).p("AE/p2IAGgYQgIgWgMgYQgjhKhChkIgdAAAE/p2QAGADAIAEQCwBQCNBiQgCBSgJBNQgPCDgjB3QgFARgOA1QgBADgBADQAAACgBACQAAABAAACIgFATQgDAJgCALQgGAVgGAYQgeBygZAtQg8BngZBnABwnmQAPAMANAXIAuBMIAnBBIAFgUIBZksAjhteIgkAXQgqBfhLBZQAGAMAHARQAeBOAlCoIAYBkQAEgDAEgDQApgkAUgvQARgrAbgoAn3FLQhHh+gmjbQgWiAgJiQQgEhEgChHIEcjJAg4izIAphrIAviBQAgg/AwgIAgEnDQBChMAyApAgEnDQgGAPgCANIgQBDIgEARAj/rUQAoBcBWBmQAKALALAMAgclkQgXgdgPgaQgZgpgHgfQgBgPgGgFQgOgKggAvQgFAHgFAHQA7AgBGBRIgIA1IgQBrIAAFJQAQCdAlCIIAAADQADB3gBBBQAABCgFAmIAAAEQgEAWgCAdQgCAyAHAkQjygCixg6QgggWABg4QAEg2gGhDQgFgygMhKQAXBeAoBXADKrpQgZBQg/A8QheBbgYA/An3FLQAZAsAbAlQBxBxB4AUQAUADAcABABnMYQAhAEATABQCRAGBnhBIA7hdIAQgaQghiWAtizAn3FLQAHBVAUBMAgHNrQByABCQgNQCQgYA6gkQAQgQACgiIgGhJIgDgj");
	this.shape_37.setTransform(65,105.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CF9174").ss(0.1,1,1).p("AjkCiQAShJAMhBQAMhBAFg6IAXgEIE1g1IAfgFQAFBbAOBSQADAQADAPQAJAzANAw");
	this.shape_38.setTransform(62.3,16.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1A3E50").s().p("AgOA3IAHg1QhGhPg7ggIAKgOQAhgvAOAKQAGAFAAAPQAIAfAYApQAQAaAWAdIgEAPIAEgPIAOhDQACgNAGgPQBFhMAxApQgwAIgfA/IgxB/IgnBrg");
	this.shape_39.setTransform(62.5,70.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E0B8A5").s().p("AgwEPIgahbQhiiCATkxIE2g1QgHGDiKChIgVBFQgXgFgQghg");
	this.shape_40.setTransform(61.8,31.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B9DBEB").s().p("AABMcIgNgKQACgeADgVIABgEIgBAEQgDAVgCAeIglgZQgbgQgEAHQgUgPi/AZQg3AAgVg0QgNg6gFgKQhQiKAAgYQABgEADgHQACgIAAgEIBgAxQBRAnAtAAQAHAAAMgDQh4gVhxhxQgbglgZgsQhHh9gmjbQgWiAgJiRQgEhDgChHIEcjJIgNgeQBLhYAqhfIgPCRICTCjIAVAYIADAEQgOgKggAuIgLAPQgaAngRAsQgUAvgpAjIgIAHIgYhkQgliogehOQAeBOAlCoIAYBkIAIgHQApgjAUgvQARgsAagnQA8AgBGBQIgIA1IgPBsIAohsIAwiAQAqg3BvBfIAmBBIAHgUIAUAZIBRk+QCwBQCNBiQgBBRgJBNQgPCEgjB3QgFAIgOA9IAAABIgCAGIgBADIgBAEIgEATIgGAUQgFAQgEAFQghArg2AoQg+AsgMAOQhEBKAACPQAAAhAiAgQAiAgAAAKQAAA/huAXQhcAIgQAFIgCAAQg4gBhKgaIglgOIABgoQAAg6gDhWIAAgDQgliIgPidIAAlJIAAFJQAPCdAlCIIAAADQADBWAAA6IgBAoQghgOgUAAQghAEghAKQhCATAAAVQABAVA+ASQAzAPBCAKQBEAGAAgHQBBgCAtgOQA0gQAKAAQAbAAACADQACABABAWQAAAvhuAXQgUgBghgFQAhAFAUABQCPAGBohCIA7hdIADAkIgYAVIgvA5IgNAWQgKASg3AaQg3AbhuAAQhKAAhMg0gAiqIhQgcgBgUgCQAUACAcABgAC6l6IguhNQgOgWgOgMQgxgphDBLQAYg/BehaQA/g9AZhPQgNgwgJgzQAgAHAsBgIAVCNIAchlQAMAZAIAWIgGAYIhYEsIgHAUg");
	this.shape_41.setTransform(65,105.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E0AE96").s().p("AgnEjQgZgpgHgeQgBgQgGgEIgDgFIgVgXQhWhmgohaQAShKAMhAQAMhDAFg6IAXgEQgUExBiCCIAaBbQAQAhAYAFIAVhEQCJihAHmEIAfgGQAFBcAOBUIAGAfQAJAyANAxQgZBNhAA8QheBbgZA/QgGAPgCANIgOBDQgXgdgPgag");
	this.shape_42.setTransform(62.3,34.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#ADCDDC").s().p("AghNrQgGgdAAgnIAAgSIAQALQBKAzBKAAQBuAAA3gaQA2gbAKgRIANgXIAwg5IAXgVIAGBJQgCAigQAQQg5AkiQAYQiLAMhvAAIgIAAgAnEMvQgggWABg4QAEg2gGhDQgFgygMhKQAXBeAoBXQgohXgXheQgUhMgHhVQAZAsAaAlQByBxB3AUQgMADgHAAQgsAAhSgmIhfgyQAAAEgDAIQgDAHAAAFQAAAXBQCLQAFAJANA6QAUA1A3AAQC/gaAVAPQADgGAbAPIAlAZIAAASQAAAnAGAdQjygCixg6gACBMdQBugXAAgvQAAgVgDgCQgCgCgaAAQgKAAg0AQQguAOhAABQAAAIhEgHQAEgmABhCQgBBCgEAmQhDgJgygPQg/gTAAgVQAAgVBBgTQAhgJAigFQAUAAAhAOIAlAOQBJAaA4ACIACgBQARgFBbgIQBvgWAAg/QgBgLghggQgjggAAggQABiQBEhKQAMgNA+gtQA2gnAhgsQAEgFAFgQIgMAtQgeBygYAtQg9BngYBnQAYhnA9hnQguCzAiCWIgRAaIg6BdQhfA7h/AAIgaAAgAn2HsIAAAAgADMlKIBYksIAOAHIhRE+IgVgZgAAGmfQAfg/AwgIQAPAMANAXIAuBMQhvhegqA2gAkuq2IAPiRIAkgXQgMBAgSBKQAoBcBVBmgADlrlQgshggfgGIgGgfIAdAAQBCBkAkBKIgcBkg");
	this.shape_43.setTransform(67.7,105.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,132,194.7);


(lib.JTI2_FALA2_inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// olhos
	this.instance = new lib.JTI2_olhos();
	this.instance.parent = this;
	this.instance.setTransform(92.3,49.8,1,1,0,0,0,21.9,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({regY:6.7,rotation:-7.2,x:90.6,y:50.3},13,cjs.Ease.get(1)).wait(70).to({regY:6.6,rotation:0,x:92.3,y:49.8},18,cjs.Ease.get(1)).wait(56));

	// boca
	this.instance_1 = new lib.JTI2_boca();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93.9,79.1,1,1,0,0,0,11,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(143).to({regY:6.3,rotation:-7.2,x:95.8,y:79.2},13,cjs.Ease.get(1)).wait(70).to({regY:6.2,rotation:0,x:93.9,y:79.1},18,cjs.Ease.get(1)).wait(56));

	// cabeca
	this.instance_2 = new lib.JTI2_cabeca_inv();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92.8,45.9,1,1,0,0,0,30.4,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(143).to({rotation:-7.2,x:90.6,y:46.3},13,cjs.Ease.get(1)).wait(70).to({rotation:0,x:92.8,y:45.9},18,cjs.Ease.get(1)).wait(56));

	// corpo
	this.instance_3 = new lib.JTI2_corpo_inv();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96,160.6,1,1,0,0,0,65,96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(300));

	// pernas
	this.instance_4 = new lib.JTI2_pernas();
	this.instance_4.parent = this;
	this.instance_4.setTransform(85.3,408.1,1,1,0,0,0,85.3,166.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(300));

	// braco1
	this.instance_5 = new lib.JTI2_braco1_inv();
	this.instance_5.parent = this;
	this.instance_5.setTransform(155.6,127.4,1,1,0,0,0,28.2,1.6);

	this.instance_6 = new lib.JTI2_braco3_inv();
	this.instance_6.parent = this;
	this.instance_6.setTransform(155.6,127.4,1,1,-4.2,0,0,28.3,1.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({regX:28.3,rotation:-4.2},6,cjs.Ease.get(-1)).to({_off:true},1).wait(154).to({_off:false,regY:1.7,rotation:-3.3,x:155.7,y:127.5},0).to({regY:1.6,rotation:4,y:127.4},9,cjs.Ease.get(-1)).to({regX:28.2,rotation:0,x:155.6},7,cjs.Ease.get(1)).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(61).to({_off:false},0).to({regY:1.7,rotation:-12.7,x:155.7,y:127.5},18,cjs.Ease.get(1)).wait(60).to({rotation:-6.5},10,cjs.Ease.get(1)).wait(65).to({rotation:-3.3},0).to({_off:true},1).wait(85));

	// braco2
	this.instance_7 = new lib.JTI2_bracos2_inv();
	this.instance_7.parent = this;
	this.instance_7.setTransform(39.1,127.1,1,1,0,0,0,36.8,1.3);

	this.instance_8 = new lib.JTI2_bracos4_inv();
	this.instance_8.parent = this;
	this.instance_8.setTransform(39.1,127.2,1,1,9.4,0,0,36.8,1.3);

	this.instance_9 = new lib.JTI2_bracos5_inv();
	this.instance_9.parent = this;
	this.instance_9.setTransform(39.1,127.2,1,1,9.4,0,0,36.8,1.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},57).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.instance_7}]},64).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_8,p:{rotation:9.4,x:39.1}}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},21).to({state:[{t:this.instance_9}]},52).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_8,p:{rotation:10.4,x:39.2}}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},10).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(57).to({rotation:4,y:127.2},15,cjs.Ease.get(1)).wait(64).to({rotation:9.4},5,cjs.Ease.get(-1)).to({_off:true},1).wait(85).to({_off:false,rotation:10.4,x:39.2},0).to({rotation:0,x:39.1,y:127.1},10,cjs.Ease.get(1)).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(143).to({_off:false},0).to({rotation:21.4,x:39.2},21,cjs.Ease.get(1)).wait(52).to({rotation:10.4},9,cjs.Ease.get(-1)).to({_off:true},1).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.1,574.4);


// stage content:



(lib.personagem2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2
	this.instance = new lib.JTI2_FALA2_inv();
	this.instance.parent = this;
	this.instance.setTransform(222.2,306,1,1,0,0,180,96.4,287.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#392311").s().p("AtCDzQgIgJADgLQAEgLALgDIAQABIALABQAHgMAUAAIARgBIAQgCQAZgFANgXQgDgKAGgWQANgrAUgrIAMgVIAigrIAHgIIgJAAQgVABgRgDQgMgCgXgIQgVgHgEgJQgDgIAEgIQADgIAIgCQAHgCAKACIAQAGQAQAHAWABQAQABAYgCQAjgDBFgKQAcgEAOgDIAngNQAXgIAQgBQADgMALgEQAMgEAIAJQAGAGAAAMQABAMgFAIQgDAFgGADIABAJQAAAVgFAJQgFAHgHACQgJACgFgFQgMAmgIATQgNAfgRAWIgbAeIgPAUQgJAMgHAHQgHAIgRAOIgVAOIgVALIgVAQIgDAGQgEAIgJACQgGABgEgBQgHgCgEgHQgEgHABgHIAAgHIgFgCIAAABQADAMgJAIQgJAJgMgFIgEgBIgDADQgJAIgPADIgbAFIgoAFQgNACg0AAQgXAAgIgIgAmtguQgRAFgZADIhIAKIAAAEQAAAHgJAPQgGAHgGARIgMAbIgQAeQgKASgEANQgHAXAEAYQAKAIAKgDQAGgCAJgHQAJgIAFgCQANgHAMAKIABAAQALgIAEgEQAIgIAKgMIA0g/QAPgVAKgeQAGgQAJgkIABgBIgVAHgALHCOIgYgFIgSgBQgwgEgkgMQgagIgjgQIgOgHIgCACQgGAHgOABQgXACghgWQgcgRgkgbIg/gtQgkgbgWgKQgXgLgrgLQgxgNgSgHQgLgEgFgEQgIgHgBgJQAAgHAFgFQAFgFAGgCQAFgBAHACIACgGQAGgHAQgEIBAgSQAGgCACgCIAEgJQADgHAJgBIAPgBQAGgBAPgHIAYgGQgBgEAAgEQACgMALgEIAOgCQALgBAUgGIAngGQAQgCAhAAIAIAAQAIgIALACQAGABAFAFQAEAFABAHQABAGgEAGQgEAGgGACIAAAAQgDADgEADQgGADgNAAQg1gBglAJIAAAAIAAABQACAOgMAIQgEACgKACQgJACgEACQgFACgHAGQgOAKgXAHIgpAKIgaAIIgZAFIAAAAIAlALQAvAOAcAPQAMAHAgAXIBQA5IAEgDQAFgFAHAAQAEAAAIAEQACgGAFgCQAGgEAHAAQAJgBARAFQAtASAkAcIAaATQANAHAUAGIAjAIIArALIAdAAQAmgBAlgGIARgCQAJABAGAEQAGAGAAAJQABAJgHAFQgFAGgOACIgJABQgDAFgHAEQgIAEgOABIgWABQgUAAgVgEg");
	this.shape.setTransform(232.4,558.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#314253").s().p("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");
	this.shape_1.setTransform(223.1,407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9DBEB").s().p("AAALzQgEgHgDgOQgEgTgBgjIhogOIgKAAQgUgBgJgDIgIgDIgRgCIAHAEQAIADAQADIAXAJIAPAEQAIACAEAFQAFAGgBAJQAAAIgHAFQgFAEgPACQg0AGgxgCQgVgBgKgDIgPgFIgOgGIgrgLQgZgGgzgYQgXgLgDgNIgCgEQgEgIADgIIAAgBIAAAAQgSgEgFgFQgGgGABgKQACgKAIgEIACgBQgMgCgCgMQgEgMAKgIQAFgFAJAAQAHAAAGAFQAFAFABAIQAAAIgEAGQgDAEgEACIAGABICIASQACgJAIgFQAHgEAOACQA3AHAnAUIATAIIAdAEQAUAAARgDQALgCAjgLIAbgIIADgSIABgMIgGACIgaANQgJADgRADQgeAFgYAAIgogCQg6gEgfgJIgfgJIgcgFIgcgFQgigGgQgSQgLgMgCgRQgDgRAGgOIAPgjQAHgRAUgZIgGgNIgIgWQgGAKgHAGIgJAFIgFAGQgHAHgMgEQgKgEgCgLIAAgDIgHgMQgYgwgOhIQgDgMADgIQADgJAKgCQAKgCAIAHQAFAGADANIACAAQAJABAFAHIgKgWQgag7gMggIgBgEQgIgEgDgEQgFgGABgHQAAgIAFgFIAFgEIgNgKQgUgQgQgHIgUgIIgVgMIgQgKQgNgIgDgHQgEgJAEgGQAEgJAJgDQADgegMgcIgQgdQgJgSgFgbIgGguIgOhLQgJgvgCgdQgBgTAHgHIADgCIgCgBQgGgEgCgHQgEgJAFgJQAEgJAKgCQAJgBAIAHQAHAHgBAKQgBALgJAGQAFACAEAFQAEAGABAOQADAgAMA+QAMA/ADAfQACASACAHQACAFAOAYQAUAigBAqQgBAQADAHQAEAHAUALIAjAVQAtAdAWAgIAPAYIAHAKIABABQAOALAIAKQAHAGACAGIAAACIAHAQQAIASAFAIIAPASQAIALAAALQAAAGgDAFQgEAFgFACQASAmAHAUQALAhgBAbQAAAQgIAGIgOAIQgDACgCAFIgEAHQgEAGgLAKQgEAGgDALIgGARIgHAMQgDAHABAGQACAJALAFQAJAFAOABIAZACQAPACAcAKQAdAJAPACIAtADIAYADQAOACAKgBQAOAAARgDQAUgDANgEIAkgPIAMgFIAAgBQAAg0gHgZIgKgiIAAgCIgMADQgPADgQgJQgLgGgOgNQgJgLgDgGQgDgKAEgKQAEgKAKgEIABgIQgLAAgGgJQgGgLAGgJQAFgKATgFIgTAAQgKgBgGgFQgHgGAAgKQABgKAHgFIAJgFQAGgCACgDQAEgDADgGIAHgJIAFgGIAFgGIAAgIQAAgFACgCQgHgFgCgJQgCgJAFgHQgFgCgLgCIgQgDQgIgCgGgGQgHgGAAgIQABgHAHgGQAGgFAIgBQAGgBAKABIAQAAQgFgMAGgLQgHgGABgKQAAgKAHgHQAKgLAXgBIAkgBQACgLABgUIADgdQAEgOAAgIQACgNgHgQIgNgYQgJgTgBgdQAAgigBgQIABgSIABgCQgIgHgFgKQgEgIgFgQQgFgRgEgHIgLgWQgKgRgJgiQgKgmgHgPQgHgRgIgJQgPgPgFgIQgLgQADgUIABgCIgEABQgHABgDACIgDAIQgFASgQAQQgMAKgWAOQAIAIAAAKQAAALgJAFQgMAIgUgNQgRgMgCgMIAAgQQAAgKgDgFIgKgKQgFgGABgKIADgMQABgGgDgHIgGgRQgDgLgBgHIgCgQQgCgGgGgHIgQgVQgJgKgBgEQgBgDABgGIgBgKIgEgLQgFgKgEgbQgCgQABgIQABgIAEgFIAAgFQAAgHAEgGQAEgEAHgEQAHgFAJgDIAIgDIAIgHIAAgDQAAgFACgEQADgFAFgEQAGgDAGAAQAGABAFAEQAFAFABAGIACAHIACAFQACAHgBAHQgCAHgFAEQgFAEgHADIgkARIAAAAIAAAKQgBAHABADQAOACAMAVQAMATAEALIAFATQABAEALARQAPAYACAhQACAXgEAlQAXgJAIgVIADgMIAFgKIAHgHQAEgFABgDIABgMQACgGAHgHIANgLIALgLIAJgFQAAgJAFgFQAFgHAJAAIABAAIAAAAQAFgFAIAAIADgBQAGgEAHABIADABQAEgBAFAAQAHAAAFAFIAEAFIAEAAQAGABAFAFQAEAFABAHQABAGgEAGQgEAGgGACIgHACQATAQAJAXIAIAbIAJASIAEAPQADAJAEAEIAKAFQAEADACADIACgCQAHgGAJACQAJABAEAIIAEAJQADAIAAAFIAAAoQgBAGgFAFIAAABQAEAHAEAPIAHAWQADAHADAEIAMAKIACAEIAUgbQAQgZAFgXQADgZADgMQADgLAHgPIAWg0QAFgMAFgEIADgCIgBgCQgGgNgH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");
	this.shape_2.setTransform(222.6,197.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0B8A5").s().p("AgGHBQgHgFgDgMIgCgVQgCgbgWgvQgNgZgLgIIgLgGIgLgFQgMgHgLgPIgSgaQgGgJgSgTQgRgRgHgLQgKgSgHgIQgNgNgGgIQgEgHgEgNIgHgVQgIgPgDgIQgDgLABgWQACghAHgMQAGgLACgGQABgFAAgHIAAgMQAAgQAGgHQAGgFAIgBQAJAAAFAGQAGAHABASIACgDQADgDAEgBIgBgEQgFgQAAghIABg1QAAgUAHgIQAGgGAJAAQAIAAAIAEIAGAGIACgBQAEgFAJgBQAHgBAIACQAFACAUANQASAMATAGIAAABIgDgIIgHgPIgKgRQgFgLgBgIQAAgEABgHIACgMQACgMAAgXIAAhzQAAgVAFgIIAGgIIADgHQAAgFACgDQAFgJATAAQATAAAFAHQAHAHAAAUIgBAcQAAAIABADIAHAKQAHALgDAaIgIA7QAIgDANADQADhLgFhMQgBgQADgHQAEgNAKgCQAHgCAHAFQAHAEACAHQAEAKgBAUQAAAQADA9QACAwgEAeQgCANADAFQADAGANAGIAeAOQASAJAFAIQAIAKgBAcQgBAOgDAGQgGALgLgBQAEALgIAMQgHALgNABQgCAHABAJIACAQIAAACIAFgIQAJgKAOgIQAIgDAHgBQADgFAEgEQAIgFAJADQAKADADAJIACAKIAAAKIABAJQAEgBAFABQAGABAFAFQAEAFABAGIAAAFQAEAGACALIADAVQADAJAKAPQAKAUgFAcQgDAQgKAeQgEAOgGAJIgIAKIgKAJQgKALgQAYQgeAsgjAtQgMAPgEAJQgGANgIAbQgFAOgMAQIgWAbQgKANgEAIQgHAOgDACQgFAEgHAAIgCAAQgEAAgEgDgAhPBGQACAMAEAEQADAEAIAFQAMAKAGAbQAEAOADATQADAYAEAMIAGANIAHAOIAHAXQALAtAYAnIAnhbQAQgmALgVQgCgGADgGQACgGAKgJIABgBIABgDQAEgMADgYQADgZADgLIAJgWQAHgWgDgpQgBgLgCgDQgIAEgGANQgJAQgDADQgJANgVADIgSACIgSAAIggAEQgSACgNgDQgQgDgUgMIgigVQANAgAEAigAhnCcQAAAHAFAIIgFgQIAAABgAiSCiIADAFIgFgJIgEgGIAGAKgAieA8QAEAIAAAGIABAGIALATQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgEIgCgKIgJgZQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABgAjJA0QgBAIACAFIADAHIgDgPIgBgHIAAACgAg5gnQAVAOAHACQAGACARAAIAQgBQgtgJgXgJIgCgBIADACgABBhGQABgHgBgGIgeAAgAhzh2IAAgLQAAgHgCgDIgCgCIAEAXgAAAijQAAAVgGAHQgDADgFAAIACAHIAOAAQAGgQgBgIIgCgOQgDgKgBgSIgBAcgAAyiGQgFAGgBADIAVAAQAAgKAEgFQADgFAGgCQAAgDgEgCIgOgGQgBAOgJAKg");
	this.shape_3.setTransform(225.5,107.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(352.6,318.8,191.1,574.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;