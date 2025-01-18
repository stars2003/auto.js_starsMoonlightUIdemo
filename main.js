/**
 * 星辰月光工作室
 * 热更文件
 */
'ui';
importClass(android.view.View);
importClass(android.graphics.Color);
ui.statusBarColor(Color.parseColor("#F4F9FD"));

activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR)//设置为沉浸状态栏
//=====
ui.layout(
    <frame id="layout_bg" h="*" bg="#F4F9FD" >
        <horizontal marginTop="5dp"  marginLeft="15dp" fitsSystemWindows="true">
            <text id="appTitle" textSize="20dp" marginLeft="2dp" text="Demo项目" textColor="#161616" margin="5dp" gravity="left"/>
        </horizontal>
        <vertical w="auto"h="auto"layout_gravity="center">
            <vertical gravity="center">
                <img id="smiling_face" visibility="gone" gravity="center" w="30" h="30" src="https://xcyg.cc/project_data/01/imgs/SmileyXEyes.png" tint="#161616"/>
                <progressbar id="progressbar_1" h="35" w="70"/>
            </vertical>
            <horizontal marginTop="10">
            <text id="text_load" text="加载中..." textColor="#7D8592" textSize="16" w="*" gravity="center"/>
            </horizontal>
        </vertical>
    </frame>
);


var storage = storages.create("demo_datas");
darkMode = storage.get("darkMode");//读取深色模式
if(darkMode == undefined){
    storage.put("darkMode", false);
    darkMode = storage.get("darkMode");

}
darkMode = storage.get("darkMode");
console.log("上次用户是否点击过深色模式："+darkMode);
if(darkMode == true){
    fun_darkMode();
}else{
    fun_undarkMode();
}


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
    ui.smiling_face.visibility = 0;
    ui.progressbar_1.visibility = 8; 
    ui.text_load.setText("加载失败");
},20000)


function fun_darkMode(){
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
        // 获取当前窗口
        let window = activity.getWindow();
        
        // 设置导航栏颜色
        let color = android.graphics.Color.parseColor("#1b1c1e");
        window.setNavigationBarColor(color);
    } else {
        console.log("当前设备不支持导航栏颜色更改 (Android 5.0 及以上支持)");
    }
    //状态栏沉浸
    ui.statusBarColor(Color.parseColor("#1b1c1e"));
    activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |View.SYSTEM_UI_FLAG_LAYOUT_STABLE)//设置为沉浸状态栏
    //功能：底部导航栏改变颜色

    ui.layout_bg.setBackgroundColor(colors.parseColor("#1b1c1e"));
    ui.appTitle.setTextColor(colors.parseColor("#ffffff"));
    ui.text_load.setTextColor(colors.parseColor("#7D8592"));
    ui.smiling_face.setColorFilter(colors.parseColor("#ffffff"));
}

function fun_undarkMode(){
    //功能：底部导航栏改变颜色
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
        // 获取当前窗口
        let window = activity.getWindow();
        
        // 设置导航栏颜色（可以替换为你想要的颜色值）
        let color = android.graphics.Color.parseColor("#F4F9FD"); // 橙色
        window.setNavigationBarColor(color);
    } else {
        console.log("当前设备不支持导航栏颜色更改 (Android 5.0 及以上支持)");
    }

}