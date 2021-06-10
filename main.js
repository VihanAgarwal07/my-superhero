canvas=new fabric.Canvas("myCanvas");
super_height=555;
super_width=400;
sup_x=50;
sup_y=100;
player_object="";
block_object="";
player_update();
function player_update(){
    fabric.Image.fromURL("IronMan.png",function(img){
player_object=img;
player_object.scaleToWidth(700);
player_object.scaleToHeight(855);
player_object.set({
    top:sup_x,
    left:sup_y
})
canvas.add(player_object)
    }
    );

}
new_sup();
function new_sup(sup){
    fabric.Image.fromURL(sup,function(img){
block_object=img;
block_object.scaleToWidth(super_width);
block_object.scaleToHeight(super_height);
block_object.set({
    top:sup_x,
    left:sup_y
})
canvas.add(block_object);
    }
    );
}