/**
 * 星辰月光工作室
 * 热更文件
 */
'ui';
importClass(android.view.View);
importClass(android.graphics.Color);
ui.statusBarColor(Color.parseColor("#ffffff"));

activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR)//设置为沉浸状态栏
//=====


var ColoredButton = (function() {
    //继承ui.Widget
    util.extend(ColoredButton, ui.Widget);

    function ColoredButton() {
        //调用父类构造函数
        ui.Widget.call(this);
        //自定a义属性color，定义按钮颜色
        this.defineAttr("color", (view, name, defaultGetter) => {
            return this._color;
        }, (view, name, value, defaultSetter) => {
            this._color = value;
            view.attr("backgroundTint", value);
        });
        //自定义属性onClick，定义被点击时执行的代码
        this.defineAttr("onClick", (view, name, defaultGetter) => {
            return this._onClick;
        }, (view, name, value, defaultSetter) => {
            this._onClick = value;
        });
    }
    ColoredButton.prototype.render = function() {
        return (
            <button textSize="16sp" style="Widget.AppCompat.Button.Colored" w="auto"/>
        );
    }
    ColoredButton.prototype.onViewCreated = function(view) {
        view.on("click", () => {
            if (this._onClick) {
                eval(this._onClick);
            }
        });
    }
    ui.registerWidget("colored-button", ColoredButton);
    return ColoredButton;
})();

ui.layout(
    <frame  h="*" bg="#Ffffff" >
        <vertical w="auto"h="auto"layout_gravity="center">
            <img src="@drawable/ic_error_outline_black_48dp" tint="#3399ff" id="picture_box" w="auto" h="0" layout_gravity="center" marginBottom="50dp"/>
        </vertical>
            <horizontal marginTop="5dp"  marginLeft="15dp" fitsSystemWindows="true">
                
                <text textSize="20dp" marginLeft="2dp" text="Demo项目" textColor="#161616" margin="5dp" gravity="left"/>
        </horizontal>
        <vertical w="auto"h="auto"layout_gravity="center">

            <vertical gravity="center">
                <progressbar id="progressbar_1" h="30" w="70"/>
            </vertical>
                <horizontal marginTop="10">
                <text id="text_load" text="加载中..." w="*" gravity="center"/>
                </horizontal>

                <vertical >
    
                
                </vertical>
            </vertical>

            
    </frame>
);

setTimeout(function(){
    ui.text_load.setText("加载中...");

    threads.start(function() {
        var url = "https://www.xcyg.cc/open_script/ui_1/layout_main.js"//运行的云端源码路径
        var res = http.get(url);
        var Source = res.body.string();
        // log(Source)
        if(res.statusCode==200){
            threads.start(function(){
                engines.execScript("UI主界面", Source,{
                    delay: 2000,
                    loopTimes: 3,
                    interval: 2000});
                setTimeout(function(){
                    ui.finish()
                },1000)
                
            })
        }
    }
    )
},1000)

setTimeout(function(){
    ui.text_load.setText("× 连接服务器失败")
    ui.progressbar_1.visibility = 8; 

},20000)

//功能：底部导航栏改变颜色
if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
    // 获取当前窗口
    let window = activity.getWindow();
    
    // 设置导航栏颜色（可以替换为你想要的颜色值）
    let color = android.graphics.Color.parseColor("#ffffff"); // 橙色
    window.setNavigationBarColor(color);
} else {
    console.log("当前设备不支持导航栏颜色更改 (Android 5.0 及以上支持)");
}