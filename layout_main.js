/**
 * 星辰月光工作室版权所有
 * 更多图标请访问该链接：https://js.design/f/BQ_y1s?p=g_kWkpxMw3&mode=design  图标导出请2倍
 *
 */

'ui';
//界面状态栏设置为沉浸式,随着toolbar颜色变化,若界面背景颜色为白色，状态栏也是白色，状态栏图标应为黑色，在安卓6以上都有效
importClass(android.view.View);
importClass(android.graphics.Color);
ui.statusBarColor(Color.parseColor("#F4F9FD"));
activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |View.SYSTEM_UI_FLAG_LAYOUT_STABLE|View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR)//设置为沉浸状态栏
//end
//调用安卓原生界面控件
importClass(android.widget.SeekBar);
importClass(android.text.TextWatcher);
importClass(android.os.Build);
importClass(android.view.WindowManager);
//end
// 导入需要的类-动画类
importClass(android.animation.ObjectAnimator);
importClass(android.animation.AnimatorSet);
importClass(android.view.MotionEvent);
//end

// 主界面布局
ui.layout(
    <frame id="container">
        <vertical>
        <frame h="*">
        <vertical fitsSystemWindows="true">
            <viewpager w="*" h="auto" id="viewpager_mainPage" bg="#F4F9FD">
                <vertical h="auto" >
                    <text id="appTile" text="星辰月光工作室项目Demo" textColor="#161616" textSize="20" marginTop="10" marginLeft="15" marginBottom="15"/>
                    <tabs id="appTile_line" h="2px" w="*" bg="#E6EBF5"/>
                        <scroll layout_weight="1">
                            <vertical>
                            <card id="start_button" cardBackgroundColor="#3F8CFF" w="*" h="auto" margin="15 7" cardCornerRadius="8" cardElevation="0dp" foreground="?selectableItemBackground">
                                <horizontal padding="8 8" gravity="center">
                                    <img src="https://www.xcyg.cc/project_data/01/imgs/TelegramLogo.png" h="20" w="20" tint="#ffffff" marginRight="5"/>
                                    <text text="开始" gravity="center" textColor="#ffffff" textSize="18"/>
                                </horizontal>
                            </card>
                            <card id="button_backToIndex" cardBackgroundColor="#F65160" w="*" h="auto" margin="15 5" cardCornerRadius="8" cardElevation="0dp" foreground="?selectableItemBackground">
                                <horizontal padding="8 8" gravity="center">
                                    <img src="https://xcyg.cc/project_data/01/imgs/ArrowLineRight.png" h="20" w="20" tint="#ffffff" marginRight="5"/>
                                    <text text="退出" gravity="center" textColor="#ffffff" textSize="18"/>
                                </horizontal>
                            </card>
                            <card w="*" h="auto" id="card_softwareSettings" cardBackgroundColor="#ffffff" margin="15 5" cardCornerRadius="15dp" cardElevation="0dp" gravity="center_vertical" foreground="?selectableItemBackground">
                                <vertical>
                                    <horizontal marginLeft="10" marginTop="10" marginBottom="10" marginRight="10">
                                        <text text="软件设置" textSize="16dp" textStyle="bold" textColor="#3F8CFF" marginLeft="3dp"/>
                                    </horizontal>
                                    <horizontal>
                                        <tabs id="card_softwareSettings_line1" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <text id="card_softwareSettings_tile1" text="权限" textStyle="bold" textColor="#161616" marginTop="10" marginLeft="15" marginBottom="10"/>
                                    <horizontal marginLeft="15">
                                    <tabs id="card_softwareSettings_line2" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <vertical>
                                                <horizontal gravity="center">
                                                <img id="card_softwareSettings_logo1" marginRight="5dp" marginTop="8px" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/Cursor.png" tint="#161616" />
                                                <text id="card_softwareSettings_text1" text="无障碍服务" textColor="#161616"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <vertical>
                                                <card id="Switch_1" w="40" cardBackgroundColor="#CED5E0" cardCornerRadius="13" cardElevation="0dp">
                                                    <vertical margin="3 3">
                                                        <card id="SwitchRound_1" w="20" h="20" cardBackgroundColor="#ffffff" cardCornerRadius="10" cardElevation="0dp">
                                                            <vertical margin="3 3">
                                                                <text textColor="#ffffff" />
                                                            </vertical>
                                                        </card>
                                                    </vertical>
                                                </card>
                                                </vertical>
                                                <Switch id="无障碍服务" visibility="gone" checked="{{auto.service != null}}"/>
                                                </horizontal>
                                            </vertical>
                                        </vertical>
                                    </vertical>

                                    <horizontal marginLeft="35">
                                    <tabs id="card_softwareSettings_line3" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>

                                    <vertical w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <vertical >
                                            <horizontal gravity="center">
                                                <img id="card_softwareSettings_logo2" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/AppWindow.png" tint="#161616" />
                                                <text id="card_softwareSettings_text2" text="悬浮窗权限" textColor="#161616"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <vertical>
                                                <card id="Switch_2" w="40" cardBackgroundColor="#CED5E0" cardCornerRadius="13" cardElevation="0dp">
                                                    <vertical margin="3 3">
                                                        <card id="SwitchRound_2" w="20" h="20" cardBackgroundColor="#ffffff" cardCornerRadius="10" cardElevation="0dp">
                                                            <vertical margin="3 3">
                                                                <text textColor="#ffffff" />
                                                            </vertical>
                                                        </card>
                                                    </vertical>
                                                </card>
                                                </vertical>
                                                <Switch id="悬浮窗权限" visibility="gone" checked="{{floaty.checkPermission() != false}}"/>
                                            </horizontal>
                                            </vertical>
                                        </vertical>
                                    </vertical>

                                    <horizontal marginLeft="35">
                                    <tabs id="card_softwareSettings_line4" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>

                                    <vertical foreground="?selectableItemBackground" w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <vertical >
                                            <horizontal gravity="center">
                                                <img id="card_softwareSettings_logo3" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/BatteryWarningVertical.png" tint="#161616" />
                                                <text id="card_softwareSettings_text3" text="忽略电池优化" textColor="#161616"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <vertical>
                                                <card id="Switch_3" w="40" cardBackgroundColor="#CED5E0" cardCornerRadius="13" cardElevation="0dp">
                                                    <vertical margin="3 3">
                                                        <card id="SwitchRound_3" w="20" h="20" cardBackgroundColor="#ffffff" cardCornerRadius="10" cardElevation="0dp">
                                                            <vertical margin="3 3">
                                                                <text textColor="#ffffff" />
                                                            </vertical>
                                                        </card>
                                                    </vertical>
                                                </card>
                                                </vertical>
                                                <Switch id="battery" visibility="gone"/>
                                            </horizontal>
                                            </vertical>
                                        </vertical>
                                    </vertical>

                                    <horizontal marginLeft="35">
                                    <tabs id="card_softwareSettings_line5" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <text id="card_softwareSettings_tile2" text="外观" textStyle="bold" textColor="#161616" marginTop="10" marginLeft="15" marginBottom="10"/>
                                    <horizontal marginLeft="15">
                                    <tabs  id="card_softwareSettings_line6" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <vertical >
                                            <horizontal gravity="center">
                                                <img id="card_softwareSettings_logo4" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/MoonStars.png" tint="#161616" />
                                                <text id="card_softwareSettings_text4" text="深色模式" textColor="#161616"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <vertical>
                                                <card id="Switch_dark" w="40" cardBackgroundColor="#CED5E0" cardCornerRadius="13" cardElevation="0dp">
                                                    <vertical margin="3 3">
                                                        <card id="SwitchRound_dark" w="20" h="20" cardBackgroundColor="#ffffff" cardCornerRadius="10" cardElevation="0dp">
                                                            <vertical margin="3 3">
                                                                <text textColor="#ffffff" />
                                                            </vertical>
                                                        </card>
                                                    </vertical>
                                                </card>
                                                </vertical>

                                            </horizontal>
                                            </vertical>
                                        </vertical>
                                    </vertical>
                                </vertical>
                            </card>

                            <tabs h="5"></tabs>
                            <card w="*" h="auto" id="card_deviceData" margin="15 5" cardCornerRadius="15dp" cardElevation="0dp" gravity="center_vertical" foreground="?selectableItemBackground">
                                <vertical >
                                <horizontal marginLeft="10" marginTop="10" marginBottom="10" marginRight="10">
                                    <text text="设备信息" textSize="16dp" textStyle="bold" textColor="#3F8CFF" marginLeft="3dp"/>
                                </horizontal>
                                <horizontal>
                                    <tabs id="card_deviceData_line1" h="2px" bg="#F4F9FD" w="*"></tabs>
                                </horizontal>
                                    <vertical w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <horizontal >
                                            <img id="card_deviceData_logo1" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/DeviceMobile.png" tint="#161616" />
                                                <text id="card_deviceData_text1" text="设备名  " textColor="#161616" marginLeft="3dp"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <text text="{{deviceName()}}" textColor="#7D8592"/>
                                            </horizontal>
                                        </vertical>
                                    </vertical>

                                    <horizontal marginLeft="35">
                                    <tabs id="card_deviceData_line2" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>

                                    <vertical w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <horizontal >
                                            <img id="card_deviceData_logo2" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/FrameCorners.png" tint="#161616" />
                                                <text id="card_deviceData_text2" text="分辨率  " textColor="#161616" marginLeft="3dp"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <text text="{{deviceWh()}}" textColor="#7D8592"/>
                                            </horizontal>
                                        </vertical>
                                    </vertical>
                                    <horizontal marginLeft="35">
                                    <tabs id="card_deviceData_line3" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical foreground="?selectableItemBackground" w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <horizontal >
                                            <img id="card_deviceData_logo3" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/AndroidLogo.png" tint="#161616" />
                                                <text id="card_deviceData_text3" text="安卓系统版本  " textColor="#161616" marginLeft="3dp"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <text text="{{device.release}}" textColor="#7D8592"/>
                                            </horizontal>
                                        </vertical>
                                    </vertical>
                                    <horizontal marginLeft="35">
                                    <tabs id="card_deviceData_line4" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical foreground="?selectableItemBackground" w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <horizontal >
                                            <img id="card_deviceData_logo4" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/BugDroid.png" tint="#161616" />
                                                <text id="card_deviceData_text4"text="是否已ROOT  " textColor="#161616" marginLeft="3dp"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <img id="img_isroot" marginRight="5dp" layout_gravity="center" w="10" h="10" src="https://xcyg.cc/project_data/01/imgs/sts_uncolor.png"/>
                                                <text id="text_isroot" text="否" textColor="#7D8592"/>
                                            </horizontal>
                                        </vertical>
                                    </vertical>
                                </vertical>
                            </card>
                            <tabs h="5"></tabs>
                            <card id="card_about" w="*" h="auto" margin="15 5"  cardCornerRadius="15dp" cardElevation="0dp" gravity="center_vertical" foreground="?selectableItemBackground">
                                <vertical >
                                <horizontal marginLeft="10" marginTop="10" marginBottom="10" marginRight="10">
                                    <text text="关于" textSize="16dp" textStyle="bold" textColor="#3F8CFF" marginLeft="3dp"/>
                                </horizontal>
                                <horizontal>
                                    <tabs id="card_about_line1" h="2px" bg="#F4F9FD" w="*"></tabs>
                                </horizontal>
                                    <vertical w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <horizontal >
                                            <img id="card_about_logo1" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/Book.png" tint="#161616" />
                                                <text id="card_about_text1" text="程序版本  " textColor="#161616" marginLeft="3dp"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <text text="1.0.0" textColor="#7D8592"/>
                                            </horizontal>
                                        </vertical>
                                    </vertical>
                                    <horizontal marginLeft="35">
                                    <tabs id="card_about_line2" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical foreground="?selectableItemBackground" w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <horizontal >
                                            <img id="card_about_logo2" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/Clock.png" tint="#161616" />
                                                <text id="card_about_text2" text="编译时间  " textColor="#161616" marginLeft="3dp"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <text text="2024-8-23 下午17:35:54" textColor="#7D8592"/>
                                            </horizontal>
                                        </vertical>
                                    </vertical>
                                    
                                    <horizontal marginLeft="35">
                                    <tabs id="card_about_line3" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical foreground="?selectableItemBackground" w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <horizontal >
                                            <img id="card_about_logo3" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/code111.png" tint="#161616" />
                                                <text id="card_about_text3" text="开发语言  " textColor="#161616" marginLeft="3dp"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <text text="Kotlin+JavaScript" tmarginTop="3" textColor="#7D8592"/>
                                            </horizontal>
                                        </vertical>
                                    </vertical>
                                    <horizontal marginLeft="15">
                                    <tabs id="card_about_line4" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical foreground="?selectableItemBackground" marginTop="6dp" marginBottom="6dp" w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <vertical gravity="center">
                                            <img marginRight="5dp" w="32" h="32" src="https://www.xcyg.cc/logo.png" />
                                                <text id="card_about_text4" text="星辰月光工作室" gravity="center" textColor="#161616"/>
                                            </vertical>
                                        </vertical>
                                    </vertical>
                                    <horizontal marginLeft="35">
                                    <tabs id="card_about_line5" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical foreground="?selectableItemBackground" w="*" h="auto"  cardElevation="0dp">
                                        <vertical margin="10 10 10 10" w="*" h="auto" cardElevation="0dp">
                                            <horizontal >
                                            <img id="card_about_logo4" marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/LinkSimple.png" tint="#161616" />
                                                <text id="card_about_text5" text="网址" textColor="#161616" marginLeft="3dp"/>
                                                <frame layout_weight="1">
                                                </frame>
                                                <text text="xcyg.cc" tmarginTop="3" textColor="#7D8592"/>
                                            </horizontal>
                                        </vertical>
                                    </vertical>
                                
                                    </vertical>
                            </card>
                            <tabs id="page1_bottom" h="80" bg="#F4F9FD"></tabs>
                            </vertical> 
                        </scroll>
                </vertical>
                <vertical>
                    <text id="appConfig" text="配置" textColor="#161616" textSize="20" marginTop="10" marginLeft="15" marginBottom="15"/>
                    <tabs id="appConfig_line" h="2px" w="*" bg="#E6EBF5"/>
                    <scroll>
                        <vertical>
                            <card id="card_config1" w="*" h="auto" marginLeft="15" marginRight="15" marginTop="10" marginBottom="10" cardCornerRadius="15dp" cardElevation="0dp" gravity="center_vertical" foreground="?selectableItemBackground">
                                <vertical >
                                <horizontal marginLeft="10" marginTop="10" marginBottom="10" marginRight="10">
                                    <text text="风控设置" textSize="16dp" textStyle="bold" textColor="#3F8CFF" marginLeft="3dp"/>
                                    <frame layout_weight="1"></frame>
                                    <horizontal  id="button_savaRisk">
                                    <img marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/FloppyDisk.png" tint="#3F8CFF" />
                                    <text text="保存" textSize="16" textColor="#3F8CFF" marginRight="10"/>
                                    </horizontal>
                                </horizontal>
                                <horizontal>
                                    <tabs id="card_config1_line1" h="2px" bg="#F4F9FD" w="*"></tabs>
                                </horizontal>
                                <vertical marginBottom="10">
                                    <vertical marginTop="10" marginLeft="15" marginRight="15">
                                        <linear>
                                            <text textColor="#7D8592" text="关注上限：" padding="0 0 5 0"/>
                                            <input id="input_FollowUpper" textSize="15sp" layout_weight="1" text ="3" singleLine="true" padding="5 5 5 5"/>
                                            <text textColor="#7D8592" text="个" padding="5 0 5 0"/>
                                        </linear>
                                    </vertical>
                                    <vertical marginTop="10" marginLeft="15" marginRight="15">
                                        <linear>
                                            <text textColor="#7D8592" text="已关注："/>
                                            <text id="textTab_followValue" textColor="#7D8592" text="0"/>
                                            <text textColor="#7D8592" text="个"/>
                                            <text id="button_clearFollowValue" text="清零" textColor="#3F8CFF" marginLeft="10"/>
                                        </linear>
                                    </vertical>  
                                    <vertical marginTop="10" marginLeft="15" marginRight="15">
                                        <linear>
                                            <text textColor="#7D8592" text="采集" padding="0 0 5 0"/>
                                            <input textColor="#161616" textSize="15sp" layout_weight="1" id="input_commentTime" text ="3" singleLine="true" padding="5 5 5 5"/>
                                            <text textColor="#7D8592" text="小时内" padding="5 0 5 0"/>
                                        </linear>
                                    </vertical>  
                                    <vertical marginTop="10" marginLeft="15" marginRight="15">
                                        <linear>
                                            <text textColor="#7D8592" text="等待" padding="0 0 5 0"/>
                                            <input id="input_comment_mini" textSize="15sp" layout_weight="1" text ="3" singleLine="true" padding="5 5 5 5"/>
                                            <text textColor="#7D8592"text="到" padding="5 0 5 0"/>
                                            <input id="input_comment_max" textSize="15sp" layout_weight="1" text ="5" singleLine="true" padding="5 5 5 5"/>
                                            <text textColor="#7D8592" text="秒" padding="5 0 5 0"/>
                                        </linear>
                                    </vertical>
                                    <vertical marginTop="10" marginLeft="15" marginRight="15">
                                        <linear>
                                            <text textColor="#7D8592" text="等待" padding="0 0 5 0"/>
                                            <input id="input_follow_mini" textSize="15sp" layout_weight="1" text ="3" singleLine="true" padding="5 5 5 5"/>
                                            <text textColor="#7D8592" text="到" padding="5 0 5 0"/>
                                            <input id="input_follow_max" textSize="15sp" layout_weight="1" text ="5" singleLine="true" padding="5 5 5 5"/>
                                            <text textColor="#7D8592" text="秒" padding="5 0 5 0"/>
                                        </linear>
                                    </vertical>
                                    <horizontal marginTop="10" marginLeft="10">
                                        <tabs  id="card_config1_line2" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <horizontal marginTop="10" marginLeft="15" marginRight="10">
                                        <text id="card_config1_text1" textColor="#161616" text="是否启用某功能1" marginTop="5"/>
                                        <frame layout_weight="1"></frame>
                                        <vertical>
                                                <card id="Switch_fun1" w="40" cardBackgroundColor="#CED5E0" cardCornerRadius="13" cardElevation="0dp">
                                                    <vertical margin="3 3">
                                                        <card id="SwitchRound_fun1" w="20" h="20" cardBackgroundColor="#ffffff" cardCornerRadius="10" cardElevation="0dp">
                                                            <vertical margin="3 3">
                                                                <text textColor="#ffffff" />
                                                            </vertical>
                                                        </card>
                                                    </vertical>
                                                </card>
                                        </vertical>
                                    </horizontal>
                                    <horizontal marginTop="10" marginLeft="10">
                                        <tabs id="card_config1_line3" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <horizontal marginTop="10" marginLeft="15" marginRight="10">
                                        <text id="card_config1_text2" textColor="#161616" text="是否启用某功能2" marginTop="5"/>
                                        <frame layout_weight="1"></frame>
                                        <vertical>
                                                <card id="Switch_fun2" w="40" cardBackgroundColor="#CED5E0" cardCornerRadius="13" cardElevation="0dp">
                                                    <vertical margin="3 3">
                                                        <card id="SwitchRound_fun2" w="20" h="20" cardBackgroundColor="#ffffff" cardCornerRadius="10" cardElevation="0dp">
                                                            <vertical margin="3 3">
                                                                <text textColor="#ffffff" />
                                                            </vertical>
                                                        </card>
                                                    </vertical>
                                                </card>
                                        </vertical>
                                    </horizontal>
                                    <horizontal marginTop="10" marginLeft="10">
                                        <tabs id="card_config1_line4" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical>
                                        <text id="card_config1_text3" text="点赞概率" textColor="#161616" marginTop="10" marginLeft="15"/>
                                        <vertical marginTop="10" marginLeft="15" marginRight="15">
                                        <linear>
                                            <text id='text_seekbar_1' textColor="#7D8592" w="50" text="50%" gravity="center" padding="5 0 5 0"/>
                                            <seekbar id="seekbar_1" progress="50"  layout_weight="1"/>
                                        </linear>
                                    </vertical> 
                                    </vertical>
                                    <horizontal marginTop="15" marginLeft="10">
                                        <tabs id="card_config1_line5" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical>
                                        <text id="card_config1_text4" text="关注概率" textColor="#161616" marginTop="10" marginLeft="15"/>
                                        <vertical marginTop="10" marginLeft="15" marginRight="15">
                                        <linear>
                                            <text id='text_seekbar_2' textColor="#7D8592" w="50" text="50%" gravity="center" padding="5 0 5 0"/>
                                            <seekbar id="seekbar_2" progress="50"  layout_weight="1"/>
                                        </linear>
                                    </vertical> 
                                    </vertical>
                                </vertical>
                                </vertical>
                            </card>
                            <card id="card_config2" w="*" h="auto" margin="15 5" cardCornerRadius="15dp" cardElevation="0dp" gravity="center_vertical" foreground="?selectableItemBackground">
                                <vertical>
                                    <horizontal marginLeft="10" marginTop="10" marginBottom="10" marginRight="10">
                                        <text text="关键词" textSize="16dp" textStyle="bold" textColor="#3F8CFF" marginLeft="3dp"/>
                                        <frame layout_weight="1"></frame>
                                        <horizontal  id="button_savaKeyword">
                                        <img marginRight="5dp" w="20" h="20" src="https://xcyg.cc/project_data/01/imgs/FloppyDisk.png" tint="#3F8CFF" />
                                        <text text="保存" textSize="16" textColor="#3F8CFF" marginRight="10"/>
                                        </horizontal>
                                    </horizontal>
                                    <horizontal>
                                        <tabs id="card_config2_line1" h="2px" bg="#F4F9FD" w="*"></tabs>
                                    </horizontal>
                                    <vertical>
                                        <horizontal marginTop="10" marginLeft="15" marginRight="15">
                                            <text text="关键词从第几个开始：" textColor="#7D8592" textSize="15sp"/>
                                            <input bg="#ffffff" id="input_keyword_value" textSize="15sp" hint="请输入整数" w="*" padding="10 10 10 10" marginBottom="8dp"/>                   
                                        </horizontal>  
                                        <horizontal marginTop="10" marginLeft="10">
                                            <tabs id="card_config2_line2" h="2px" bg="#F4F9FD" w="*"></tabs>
                                        </horizontal>
                                        <vertical marginTop="10" marginLeft="15" marginRight="15" marginBottom="5">
                                            <text text="关键词：" textColor="#7D8592" textSize="15sp"/>
                                            <input bg="#ffffff" id="input_keyword" textSize="15sp" marginTop="5" hint="请在此输入关键词，格式：换行" w="*" padding="10 10 10 10" marginBottom="8dp"/>                   
                                        </vertical> 
                                    </vertical>
                                </vertical>
                            </card>
                            <tabs id="page2_bottom" h="80" bg="#F4F9FD"></tabs>
                        </vertical>
                    </scroll>

                </vertical>
                <vertical>
                <text id="appOther" text="其它" textColor="#161616" textSize="20" marginTop="10" marginLeft="15" marginBottom="15"/>
                <tabs id="appOther_line" h="2px" w="*" bg="#E6EBF5"/>
                        <frame h="*">
                            <vertical w="auto" h="auto" layout_gravity="center" marginTop="-100">
                                <vertical gravity="center">
                                <img id="other_smiling_face" gravity="center" w="30" h="30" src="https://xcyg.cc/project_data/01/imgs/Smiley.png" tint="#161616"/>
                                <text textColor="#7D8592" gravity="center" marginTop="10" text="暂时什么都没有哦"/>
                                </vertical>
                                <horizontal marginTop="10">
                                    <text textColor="#7D8592" gravity="center" text="Nothing at the moment."/>
                                </horizontal>
                            </vertical>
                        </frame>
                </vertical>
         </viewpager>
        </vertical>
        <vertical gravity="bottom">
        <tabs id="navigation_line" h="2px" w="*" bg="#f2f2f2"/>
        <horizontal id="navigation" bg="#FFFFFF" padding="10" >
            <vertical id="button_viewPage_1" h="*" layout_weight="1" gravity="center_horizontal">
                <vertical gravity="center_horizontal" marginTop="8">
                <img id="button_viewPage_1_logo" src="https://xcyg.cc/project_data/01/imgs/SquaresFour.png" layout_weight="2" tint="#3F8CFF" h="20" w="20"></img>
                </vertical>
                <text id="button_viewPage_1_text" text="首页" textColor="#3F8CFF" layout_weight="1" h="0" gravity="center"/>
            </vertical>
            <vertical id="button_viewPage_2" h="*" layout_weight="1" gravity="center_horizontal">
                <vertical gravity="center_horizontal" marginTop="8">
                <img id="button_viewPage_2_logo" src="https://xcyg.cc/project_data/01/imgs/Palette.png" layout_weight="2" tint="#161616" h="20" w="20"></img>
                </vertical>
                <text id="button_viewPage_2_text" text="配置" textColor="#161616" layout_weight="1" h="0" gravity="center"/>
            </vertical>
            <vertical id="button_viewPage_3" h="*" layout_weight="1" gravity="center_horizontal">
                <vertical gravity="center_horizontal" marginTop="8">
                <img id="button_viewPage_3_logo" src="https://xcyg.cc/project_data/01/imgs/DotsThreeOutline.png" layout_weight="2" tint="#161616" h="20" w="20"></img>
                </vertical>
                <text id="button_viewPage_3_text" text="其它" textColor="#161616" layout_weight="1" h="0" gravity="center"/>
            </vertical>

        </horizontal>
    </vertical>
       
    </frame>

        </vertical>
    </frame>
);
let switch1_isOn=false;
let switch2_isOn=false;
var darkMode=false;
var storage = storages.create("demo_datas");


//UI渲染
    //input组件
        importClass(android.graphics.drawable.GradientDrawable);
        // 创建一个圆角的背景
        function createRoundedBackground(cornerRadius, color) {
            var drawable = new GradientDrawable();
            drawable.setColor(color); // 设置背景颜色
            drawable.setCornerRadius(cornerRadius); // 设置圆角半径
            return drawable;
        }
        inputStyle(20,android.graphics.Color.parseColor("#F4F9FD"),colors.parseColor("#161616"));
        function inputStyle(Radius,bgcolor,textcolor){
            // 设置 input 的背景为圆角
            var cornerRadius = Radius; // 圆角半径
            var backgroundColor = bgcolor; // 背景颜色
            //ui.userId_input.setBackgroundDrawable(createRoundedBackground(cornerRadius, backgroundColor));//登录页面-账号输入框
            ui.input_keyword.setBackgroundDrawable(createRoundedBackground(cornerRadius, backgroundColor));
            ui.input_keyword_value.setBackgroundDrawable(createRoundedBackground(cornerRadius, backgroundColor));
            ui.input_comment_mini.setBackgroundDrawable(createRoundedBackground(cornerRadius, backgroundColor));
            ui.input_comment_max.setBackgroundDrawable(createRoundedBackground(cornerRadius, backgroundColor));
            ui.input_follow_mini.setBackgroundDrawable(createRoundedBackground(cornerRadius, backgroundColor));
            ui.input_follow_max.setBackgroundDrawable(createRoundedBackground(cornerRadius, backgroundColor));
            ui.input_commentTime.setBackgroundDrawable(createRoundedBackground(cornerRadius, backgroundColor));
            ui.input_FollowUpper.setBackgroundDrawable(createRoundedBackground(cornerRadius, backgroundColor));
            //文本颜色
            ui.input_keyword.setTextColor(textcolor);
            ui.input_keyword_value.setTextColor(textcolor);
            ui.input_comment_mini.setTextColor(textcolor);
            ui.input_comment_max.setTextColor(textcolor);
            ui.input_follow_mini.setTextColor(textcolor);
            ui.input_follow_max.setTextColor(textcolor);
            ui.input_commentTime.setTextColor(textcolor);
            ui.input_FollowUpper.setTextColor(textcolor);

        }

    //end
//end

let totalPages = 3;// 总页数
var currentPage = 1;//当前页面
// 页面切换监听器
ui.viewpager_mainPage.setOnPageChangeListener({
    onPageSelected: function(position) {
        currentPage = position + 1;
        log("当前页面："+(currentPage) + "/" + totalPages);

        if(currentPage==1){
            ui.button_viewPage_1.click();
        }
        if(currentPage==2){
            ui.button_viewPage_2.click();
        }
        if(currentPage==3){
            ui.button_viewPage_3.click();
        }

    }
});
//end

 $ui.button_viewPage_1.on("click", () => {
    ui.viewpager_mainPage.setCurrentItem(0, true);

    if(darkMode == true){//判断用户是否开启了深色模式
        ui.button_viewPage_1_logo.setColorFilter(colors.parseColor("#3F8CFF"));
        ui.button_viewPage_1_text.setTextColor(colors.parseColor("#3F8CFF"));

        ui.button_viewPage_2_logo.setColorFilter(colors.parseColor("#ffffff"));
        ui.button_viewPage_2_text.setTextColor(colors.parseColor("#ffffff"));
        
        ui.button_viewPage_3_logo.setColorFilter(colors.parseColor("#ffffff"));
        ui.button_viewPage_3_text.setTextColor(colors.parseColor("#ffffff"));
    }else{
        ui.button_viewPage_1_logo.setColorFilter(colors.parseColor("#3F8CFF"));
        ui.button_viewPage_1_text.setTextColor(colors.parseColor("#3F8CFF"));

        ui.button_viewPage_2_logo.setColorFilter(colors.parseColor("#161616"));
        ui.button_viewPage_2_text.setTextColor(colors.parseColor("#161616"));
        
        ui.button_viewPage_3_logo.setColorFilter(colors.parseColor("#161616"));
        ui.button_viewPage_3_text.setTextColor(colors.parseColor("#161616"));
    }

    // 创建缩放动画
    let scaleDownX = ObjectAnimator.ofFloat(ui.button_viewPage_1, "scaleX", 1.0, 0.9);
    let scaleDownY = ObjectAnimator.ofFloat(ui.button_viewPage_1, "scaleY", 1.0, 0.9);

    // 创建还原动画
    let scaleUpX = ObjectAnimator.ofFloat(ui.button_viewPage_1, "scaleX", 0.9, 1.0);
    let scaleUpY = ObjectAnimator.ofFloat(ui.button_viewPage_1, "scaleY", 0.9, 1.0);

    // 设置动画时间
    scaleDownX.setDuration(100);
    scaleDownY.setDuration(100);
    scaleUpX.setDuration(100);
    scaleUpY.setDuration(100);

    // 创建动画集合
    let animatorSet = new AnimatorSet();
    animatorSet.play(scaleDownX).with(scaleDownY);
    animatorSet.play(scaleUpX).with(scaleUpY).after(scaleDownX);
    // 启动动画
    animatorSet.start();
     
 });
 
 $ui.button_viewPage_2.on("click", () => {
    ui.viewpager_mainPage.setCurrentItem(1, true);

    if(darkMode == true){//判断用户是否开启了深色模式
        ui.button_viewPage_1_logo.setColorFilter(colors.parseColor("#ffffff"));
        ui.button_viewPage_1_text.setTextColor(colors.parseColor("#ffffff"));

        ui.button_viewPage_2_logo.setColorFilter(colors.parseColor("#3F8CFF"));
        ui.button_viewPage_2_text.setTextColor(colors.parseColor("#3F8CFF"));

        ui.button_viewPage_3_logo.setColorFilter(colors.parseColor("#ffffff"));
        ui.button_viewPage_3_text.setTextColor(colors.parseColor("#ffffff"));
    }else{
        ui.button_viewPage_1_logo.setColorFilter(colors.parseColor("#161616"));
        ui.button_viewPage_1_text.setTextColor(colors.parseColor("#161616"));

        ui.button_viewPage_2_logo.setColorFilter(colors.parseColor("#3F8CFF"));
        ui.button_viewPage_2_text.setTextColor(colors.parseColor("#3F8CFF"));

        ui.button_viewPage_3_logo.setColorFilter(colors.parseColor("#161616"));
        ui.button_viewPage_3_text.setTextColor(colors.parseColor("#161616"));
    }

    // 创建缩放动画
    let scaleDownX = ObjectAnimator.ofFloat(ui.button_viewPage_2, "scaleX", 1.0, 0.9);
    let scaleDownY = ObjectAnimator.ofFloat(ui.button_viewPage_2, "scaleY", 1.0, 0.9);

    // 创建还原动画
    let scaleUpX = ObjectAnimator.ofFloat(ui.button_viewPage_2, "scaleX", 0.9, 1.0);
    let scaleUpY = ObjectAnimator.ofFloat(ui.button_viewPage_2, "scaleY", 0.9, 1.0);

    // 设置动画时间
    scaleDownX.setDuration(100);
    scaleDownY.setDuration(100);
    scaleUpX.setDuration(100);
    scaleUpY.setDuration(100);

    // 创建动画集合
    let animatorSet = new AnimatorSet();
    animatorSet.play(scaleDownX).with(scaleDownY);
    animatorSet.play(scaleUpX).with(scaleUpY).after(scaleDownX);

    // 启动动画
    animatorSet.start();
 });
 
 $ui.button_viewPage_3.on("click", () => {
    ui.viewpager_mainPage.setCurrentItem(2, true);

    if(darkMode == true){//判断用户是否开启了深色模式
        ui.button_viewPage_1_logo.setColorFilter(colors.parseColor("#ffffff"));
        ui.button_viewPage_1_text.setTextColor(colors.parseColor("#ffffff"));
        
        ui.button_viewPage_2_logo.setColorFilter(colors.parseColor("#ffffff"));
        ui.button_viewPage_2_text.setTextColor(colors.parseColor("#ffffff"));

        ui.button_viewPage_3_logo.setColorFilter(colors.parseColor("#3F8CFF"));
        ui.button_viewPage_3_text.setTextColor(colors.parseColor("#3F8CFF"));
    }else{
        ui.button_viewPage_1_logo.setColorFilter(colors.parseColor("#161616"));
        ui.button_viewPage_1_text.setTextColor(colors.parseColor("#161616"));
        
        ui.button_viewPage_2_logo.setColorFilter(colors.parseColor("#161616"));
        ui.button_viewPage_2_text.setTextColor(colors.parseColor("#161616"));
        
        ui.button_viewPage_3_logo.setColorFilter(colors.parseColor("#3F8CFF"));
        ui.button_viewPage_3_text.setTextColor(colors.parseColor("#3F8CFF"));
    }
    // 创建缩放动画
    let scaleDownX = ObjectAnimator.ofFloat(ui.button_viewPage_3, "scaleX", 1.0, 0.9);
    let scaleDownY = ObjectAnimator.ofFloat(ui.button_viewPage_3, "scaleY", 1.0, 0.9);

    // 创建还原动画
    let scaleUpX = ObjectAnimator.ofFloat(ui.button_viewPage_3, "scaleX", 0.9, 1.0);
    let scaleUpY = ObjectAnimator.ofFloat(ui.button_viewPage_3, "scaleY", 0.9, 1.0);

    // 设置动画时间
    scaleDownX.setDuration(100);
    scaleDownY.setDuration(100);
    scaleUpX.setDuration(100);
    scaleUpY.setDuration(100);

    // 创建动画集合
    let animatorSet = new AnimatorSet();
    animatorSet.play(scaleDownX).with(scaleDownY);
    animatorSet.play(scaleUpX).with(scaleUpY).after(scaleDownX);

    // 启动动画
    animatorSet.start();
 });
 

//end
function deviceWh() { //获取分辨率函数
    return device.width + " × " + device.height;
}

function deviceName() {//获取设备名函数
    return device.brand + " " + device.model;
}

function extractNumbers(str) {//只提取数字
    return str.replace(/\D/g, '');
}

ui.无障碍服务.on("check", function(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});
ui.悬浮窗权限.on("check", function(checked) {
    //申请悬浮窗
    importClass(android.content.Intent);
    importClass(android.net.Uri);
    importClass(android.provider.Settings);
    var intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
    Uri.parse("package:" + context.getPackageName()));//取自身包名
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    app.startActivity(intent);
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.无障碍服务.checked = auto.service != null;
    if (auto.service == null) {
        log("请开启无障碍服务！");
        switch1_isOn=false
        switch_Animate(ui.SwitchRound_1,ui.Switch_1,false);
    }else{
        switch1_isOn=true
        switch_Animate(ui.SwitchRound_1,ui.Switch_1,true);
    }
    ui.悬浮窗权限.checked = floaty.checkPermission() != false
    if (floaty.checkPermission() == false) {
        log("请开启悬浮窗权限！")
        switch2_isOn=false
        switch_Animate(ui.SwitchRound_2,ui.Switch_2,false);
    }else{
        switch2_isOn=true
        switch_Animate(ui.SwitchRound_2,ui.Switch_2,true);
    }
});

if(ui.无障碍服务.isChecked()==true){
    setTimeout(()=>{switch_Animate(ui.SwitchRound_1,ui.Switch_1,true);switch1_isOn= false;},500);
}else{
    setTimeout(()=>{switch_Animate(ui.SwitchRound_1,ui.Switch_1,false);switch1_isOn= true;},500);
}
if(ui.悬浮窗权限.isChecked()==true){
    setTimeout(()=>{switch_Animate(ui.SwitchRound_2,ui.Switch_2,true);switch2_isOn= false;},500);
}else{
    setTimeout(()=>{switch_Animate(ui.SwitchRound_2,ui.Switch_2,false);switch2_isOn= true;},500);
}

//导入电池权限
importClass(android.content.Context);
importClass(android.content.Intent);
importClass(android.net.Uri);
importClass(android.provider.Settings);
importClass(android.os.PowerManager);
//====
// 检查电池优化状态
checkBatteryOptimizationStatus();

// 设置监听器
ui.battery.setOnCheckedChangeListener(function(widget, checked) {
    if (checked) {
        requestIgnoreBatteryOptimization();
    } else {
        toast("由于系统限制，请手动在系统设置中操作。");
        widget.checked = true;  // 保持开启状态
        setTimeout(()=>{switch_Animate(ui.SwitchRound_3,ui.Switch_3,true);switch3_isOn= false;},500);
    }
});

// 检查电池优化状态函数
function checkBatteryOptimizationStatus() {
    let powerManager = context.getSystemService(Context.POWER_SERVICE);
    if (powerManager.isIgnoringBatteryOptimizations(context.getPackageName())) {
        ui.battery.setChecked(true);  // 已忽略电池优化
        setTimeout(()=>{switch_Animate(ui.SwitchRound_3,ui.Switch_3,true);switch3_isOn= false;},500);
    } else {
        ui.battery.setChecked(false); // 未忽略电池优化
        setTimeout(()=>{switch_Animate(ui.SwitchRound_3,ui.Switch_3,false);switch3_isOn= true;},500);
    }
}

// 请求忽略电池优化函数
function requestIgnoreBatteryOptimization() {
    let intent = new Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS);
    intent.setData(Uri.parse("package:" + context.getPackageName()));
    app.startActivity(intent);
    // 暂时无法知道用户是否选择了忽略，因此需要下次启动时再次检查
}



ui.Switch_1.on("click", () => {
    ui.无障碍服务.click();
    if(ui.无障碍服务.isChecked()==true){
        switch1_isOn=true;
        switch_Animate(ui.SwitchRound_1,ui.Switch_1,true);
    }else{
        switch1_isOn=false;
        switch_Animate(ui.SwitchRound_1,ui.Switch_1,false);

    }
});
ui.Switch_2.on("click", () => {
    ui.悬浮窗权限.click();
    if(ui.悬浮窗权限.isChecked()==true){
       switch2_isOn=true;
       switch_Animate(ui.SwitchRound_2,ui.Switch_2,true);
   }else{
       switch2_isOn=false;
       switch_Animate(ui.SwitchRound_2,ui.Switch_2,false);
    }
});

ui.Switch_3.on("click", () => {
    ui.battery.click();
    if(ui.battery.isChecked()==true){
       switch3_isOn=true;
       switch_Animate(ui.SwitchRound_3,ui.Switch_3,ui.Switch_3,true);
   }else{
       switch3_isOn=false;
       switch_Animate(ui.SwitchRound_3,ui.Switch_3,ui.Switch_3,false);
    }
});

/**
 * 检测ROOT
 */
if (files.exists("/system/bin/su") || files.exists("/system/xbin/su")) {
    ui.text_isroot.setText("是");
    ui.img_isroot.setSource("https://xcyg.cc/project_data/01/imgs/sts_green.png");
    log("设备已 Root");
} else {
    ui.text_isroot.setText("否");
    log("设备未 Root");
}

ui.Switch_dark.on("click", () => {
    darkMode = !darkMode;
    switch_Animate(ui.SwitchRound_dark,ui.Switch_dark,darkMode);
    storage.put("darkMode",darkMode);
    if(darkMode == true){
        fun_darkmode();
    }else{
        fun_undarkmode();
    }
});
function fun_darkmode(){
    log("已开启深色模式");
    //功能：底部导航栏改变颜色
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
        // 获取当前窗口
        let window = activity.getWindow();
        
        // 设置导航栏颜色
        let color = android.graphics.Color.parseColor("#1b1c1e");
        window.setNavigationBarColor(color);
    } else {
        console.log("当前设备不支持导航栏颜色更改 (Android 5.0 及以上支持)");
    }
    //input组件
    inputStyle(20,android.graphics.Color.parseColor("#38393b"),colors.parseColor("#ffffff"));

    //状态栏沉浸
    ui.statusBarColor(Color.parseColor("#1b1c1e"));
    activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |View.SYSTEM_UI_FLAG_LAYOUT_STABLE)//设置为沉浸状态栏
    //软件标题以及背景颜色
    ui.appTile.setTextColor(colors.parseColor("#ffffff"));
    ui.appTile_line.setBackgroundColor(colors.parseColor("#515259"));
    ui.viewpager_mainPage.setBackgroundColor(colors.parseColor("#1b1c1e"));
    ui.page1_bottom.setBackgroundColor(colors.parseColor("#1b1c1e"));
    ui.page2_bottom.setBackgroundColor(colors.parseColor("#1b1c1e"));
    //导航
    ui.navigation.setBackgroundColor(colors.parseColor("#1b1c1e"));
    ui.navigation_line.setBackgroundColor(colors.parseColor("#515259"));

    ui.button_viewPage_1_logo.setColorFilter(colors.parseColor("#3F8CFF"));
    ui.button_viewPage_1_text.setTextColor(colors.parseColor("#3F8CFF"));
    
    ui.button_viewPage_2_logo.setColorFilter(colors.parseColor("#ffffff"));
    ui.button_viewPage_2_text.setTextColor(colors.parseColor("#ffffff"));
    
    ui.button_viewPage_3_logo.setColorFilter(colors.parseColor("#ffffff"));
    ui.button_viewPage_3_text.setTextColor(colors.parseColor("#ffffff"));

    //首页
    ui.card_softwareSettings.setCardBackgroundColor(colors.parseColor("#212325"));

    ui.card_softwareSettings_tile1.setTextColor(colors.parseColor("#ffffff"));
    ui.card_softwareSettings_tile2.setTextColor(colors.parseColor("#ffffff"));

    ui.card_softwareSettings_text1.setTextColor(colors.parseColor("#ffffff"));
    ui.card_softwareSettings_text2.setTextColor(colors.parseColor("#ffffff"));
    ui.card_softwareSettings_text3.setTextColor(colors.parseColor("#ffffff"));
    ui.card_softwareSettings_text4.setTextColor(colors.parseColor("#ffffff"));

    ui.card_softwareSettings_line1.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_softwareSettings_line2.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_softwareSettings_line3.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_softwareSettings_line4.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_softwareSettings_line5.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_softwareSettings_line6.setBackgroundColor(colors.parseColor("#515259"));

    ui.card_softwareSettings_logo1.setColorFilter(colors.parseColor("#ffffff"));
    ui.card_softwareSettings_logo2.setColorFilter(colors.parseColor("#ffffff"));
    ui.card_softwareSettings_logo3.setColorFilter(colors.parseColor("#ffffff"));
    ui.card_softwareSettings_logo4.setColorFilter(colors.parseColor("#ffffff"));
    //==
    ui.card_deviceData.setCardBackgroundColor(colors.parseColor("#212325"));

    ui.card_deviceData_text1.setTextColor(colors.parseColor("#ffffff"));
    ui.card_deviceData_text2.setTextColor(colors.parseColor("#ffffff"));
    ui.card_deviceData_text3.setTextColor(colors.parseColor("#ffffff"));
    ui.card_deviceData_text4.setTextColor(colors.parseColor("#ffffff"));
    
    ui.card_deviceData_line1.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_deviceData_line2.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_deviceData_line3.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_deviceData_line4.setBackgroundColor(colors.parseColor("#515259"));

    ui.card_deviceData_logo1.setColorFilter(colors.parseColor("#ffffff"));
    ui.card_deviceData_logo2.setColorFilter(colors.parseColor("#ffffff"));
    ui.card_deviceData_logo3.setColorFilter(colors.parseColor("#ffffff"));
    ui.card_deviceData_logo4.setColorFilter(colors.parseColor("#ffffff"));
    //==
    ui.card_about.setCardBackgroundColor(colors.parseColor("#212325"));

    ui.card_about_text1.setTextColor(colors.parseColor("#ffffff"));
    ui.card_about_text2.setTextColor(colors.parseColor("#ffffff"));
    ui.card_about_text3.setTextColor(colors.parseColor("#ffffff"));
    ui.card_about_text4.setTextColor(colors.parseColor("#ffffff"));
    ui.card_about_text5.setTextColor(colors.parseColor("#ffffff"));

    ui.card_about_line1.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_about_line2.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_about_line3.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_about_line4.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_about_line5.setBackgroundColor(colors.parseColor("#515259"));

    ui.card_about_logo1.setColorFilter(colors.parseColor("#ffffff"));
    ui.card_about_logo2.setColorFilter(colors.parseColor("#ffffff"));
    ui.card_about_logo3.setColorFilter(colors.parseColor("#ffffff"));
    ui.card_about_logo4.setColorFilter(colors.parseColor("#ffffff"));
    //配置页面
    ui.appConfig.setTextColor(colors.parseColor("#ffffff"));
    ui.appConfig_line.setBackgroundColor(colors.parseColor("#515259"));
    //==
    ui.card_config1.setCardBackgroundColor(colors.parseColor("#212325"));

    ui.card_config1_line1.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_config1_line2.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_config1_line3.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_config1_line4.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_config1_line5.setBackgroundColor(colors.parseColor("#515259"));

    ui.card_config1_text1.setTextColor(colors.parseColor("#ffffff"));
    ui.card_config1_text2.setTextColor(colors.parseColor("#ffffff"));
    ui.card_config1_text3.setTextColor(colors.parseColor("#ffffff"));
    ui.card_config1_text4.setTextColor(colors.parseColor("#ffffff"));
    //==
    ui.card_config2.setCardBackgroundColor(colors.parseColor("#212325"));
    ui.card_config2_line1.setBackgroundColor(colors.parseColor("#515259"));
    ui.card_config2_line2.setBackgroundColor(colors.parseColor("#515259"));
    //其它页面
    ui.appOther.setTextColor(colors.parseColor("#ffffff"));
    ui.appOther_line.setBackgroundColor(colors.parseColor("#515259"));
    ui.other_smiling_face.setColorFilter(colors.parseColor("#ffffff"));
}
function fun_undarkmode(){
    log("已关闭深色模式");
    //功能：底部导航栏改变颜色
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
        // 获取当前窗口
        let window = activity.getWindow();
        
        // 设置导航栏颜色（可以替换为你想要的颜色值）
        let color = android.graphics.Color.parseColor("#ffffff"); // 白色
        window.setNavigationBarColor(color);
    } else {
        console.log("当前设备不支持导航栏颜色更改 (Android 5.0 及以上支持)");
    }
    //input组件
    inputStyle(20,android.graphics.Color.parseColor("#F4F9FD"),colors.parseColor("#161616"));
    //状态栏沉浸
    ui.statusBarColor(Color.parseColor("#F4F9FD"));
    activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |View.SYSTEM_UI_FLAG_LAYOUT_STABLE|View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR)//设置为沉浸状态栏
    //软件标题以及背景颜色
    ui.appTile.setTextColor(colors.parseColor("#161616"));
    ui.appTile_line.setBackgroundColor(colors.parseColor("#E6EBF5"));
    ui.viewpager_mainPage.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.page1_bottom.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.page2_bottom.setBackgroundColor(colors.parseColor("#F4F9FD"));
    //导航
    ui.navigation.setBackgroundColor(colors.parseColor("#ffffff"));
    ui.navigation_line.setBackgroundColor(colors.parseColor("#E6EBF5"));

    ui.button_viewPage_1_logo.setColorFilter(colors.parseColor("#3F8CFF"));
    ui.button_viewPage_1_text.setTextColor(colors.parseColor("#3F8CFF"));
    
    ui.button_viewPage_2_logo.setColorFilter(colors.parseColor("#161616"));
    ui.button_viewPage_2_text.setTextColor(colors.parseColor("#161616"));
    
    ui.button_viewPage_3_logo.setColorFilter(colors.parseColor("#161616"));
    ui.button_viewPage_3_text.setTextColor(colors.parseColor("#161616"));
    //首页
    ui.card_softwareSettings.setCardBackgroundColor(colors.parseColor("#ffffff"));
  
    ui.card_softwareSettings_tile1.setTextColor(colors.parseColor("#161616"));
    ui.card_softwareSettings_tile2.setTextColor(colors.parseColor("#161616"));

    ui.card_softwareSettings_text1.setTextColor(colors.parseColor("#161616"));
    ui.card_softwareSettings_text2.setTextColor(colors.parseColor("#161616"));
    ui.card_softwareSettings_text3.setTextColor(colors.parseColor("#161616"));
    ui.card_softwareSettings_text4.setTextColor(colors.parseColor("#161616"));

    ui.card_softwareSettings_line1.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_softwareSettings_line2.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_softwareSettings_line3.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_softwareSettings_line4.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_softwareSettings_line5.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_softwareSettings_line6.setBackgroundColor(colors.parseColor("#F4F9FD"));

    ui.card_softwareSettings_logo1.setColorFilter(colors.parseColor("#161616"));
    ui.card_softwareSettings_logo2.setColorFilter(colors.parseColor("#161616"));
    ui.card_softwareSettings_logo3.setColorFilter(colors.parseColor("#161616"));
    ui.card_softwareSettings_logo4.setColorFilter(colors.parseColor("#161616"));
    //==
    ui.card_deviceData.setCardBackgroundColor(colors.parseColor("#ffffff"));

    ui.card_deviceData_text1.setTextColor(colors.parseColor("#161616"));
    ui.card_deviceData_text2.setTextColor(colors.parseColor("#161616"));
    ui.card_deviceData_text3.setTextColor(colors.parseColor("#161616"));
    ui.card_deviceData_text4.setTextColor(colors.parseColor("#161616"));

    ui.card_deviceData_line1.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_deviceData_line2.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_deviceData_line3.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_deviceData_line4.setBackgroundColor(colors.parseColor("#F4F9FD"));

    ui.card_deviceData_logo1.setColorFilter(colors.parseColor("#161616"));
    ui.card_deviceData_logo2.setColorFilter(colors.parseColor("#161616"));
    ui.card_deviceData_logo3.setColorFilter(colors.parseColor("#161616"));
    ui.card_deviceData_logo4.setColorFilter(colors.parseColor("#161616"));
    //==
    ui.card_about.setCardBackgroundColor(colors.parseColor("#ffffff"));
    ui.card_about_text1.setTextColor(colors.parseColor("#161616"));
    ui.card_about_text2.setTextColor(colors.parseColor("#161616"));
    ui.card_about_text3.setTextColor(colors.parseColor("#161616"));
    ui.card_about_text4.setTextColor(colors.parseColor("#161616"));
    ui.card_about_text5.setTextColor(colors.parseColor("#161616"));

    ui.card_about_line1.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_about_line2.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_about_line3.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_about_line4.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_about_line5.setBackgroundColor(colors.parseColor("#F4F9FD"));

    ui.card_about_logo1.setColorFilter(colors.parseColor("#161616"));
    ui.card_about_logo2.setColorFilter(colors.parseColor("#161616"));
    ui.card_about_logo3.setColorFilter(colors.parseColor("#161616"));
    ui.card_about_logo4.setColorFilter(colors.parseColor("#161616"));

    //配置页面
    ui.appConfig.setTextColor(colors.parseColor("#161616"));
    ui.appConfig_line.setBackgroundColor(colors.parseColor("#E6EBF5"));
    //==
    ui.card_config1.setCardBackgroundColor(colors.parseColor("#ffffff"));

    ui.card_config1_line1.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_config1_line2.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_config1_line3.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_config1_line4.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_config1_line5.setBackgroundColor(colors.parseColor("#F4F9FD"));

    ui.card_config1_text1.setTextColor(colors.parseColor("#161616"));
    ui.card_config1_text2.setTextColor(colors.parseColor("#161616"));
    ui.card_config1_text3.setTextColor(colors.parseColor("#161616"));
    ui.card_config1_text4.setTextColor(colors.parseColor("#161616"));
    //==
    ui.card_config2.setCardBackgroundColor(colors.parseColor("#ffffff"));
    ui.card_config2_line1.setBackgroundColor(colors.parseColor("#F4F9FD"));
    ui.card_config2_line2.setBackgroundColor(colors.parseColor("#F4F9FD"));
    //其它页面
    ui.appOther.setTextColor(colors.parseColor("#161616"));
    ui.appOther_line.setBackgroundColor(colors.parseColor("#E6EBF5"));
    ui.other_smiling_face.setColorFilter(colors.parseColor("#161616"));
}
/**
 * 功能：自定义Switch组件动画
 */
function switch_Animate(RoundObject,Object,isOn){
    let card = RoundObject;
    let card_bg=Object
    let parentWidth = card.getParent().getWidth();
    let cardWidth = card.getWidth();
    if(isOn==true){
        let targetX = parentWidth - cardWidth - 0 
    
        // 创建动画
        let animator = card.animate()
            .translationX(targetX)
            .setDuration(200);// 动画持续时间（毫秒）
    
        // 添加动画监听器
        animator.setListener(new android.animation.AnimatorListenerAdapter({
            onAnimationEnd: (animation) => {
                log("动画结束");
                card_bg.attr("cardBackgroundColor",  "#3F8CFF"); 
            },
            onAnimationStart: (animation) => {
                log("左右动画开始了");
    
            }
        }));
    
        animator.start();
    }else{
        // 创建动画
        let animator = card.animate()
            .translationX(0)
            .setDuration(200);// 动画持续时间（毫秒）
    
        // 添加动画监听器
        animator.setListener(new android.animation.AnimatorListenerAdapter({
            onAnimationEnd: (animation) => {
                log("动画结束");
                card_bg.attr("cardBackgroundColor","#CED5E0" ); 
            },
            onAnimationStart: (animation) => {
                log("左右动画开始了");
    
            }
        }));
    
        animator.start();
    }

}

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

//下面注释是透明导航栏代码，如果有这方面需求可以把注释去掉
/*
if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
    // 获取当前窗口
    let window = activity.getWindow();
    
    // 设置导航栏为透明
    window.setNavigationBarColor(android.graphics.Color.TRANSPARENT);
    
    // 设置状态栏为透明（可选）
    window.setStatusBarColor(android.graphics.Color.TRANSPARENT);

    // 启用窗口标志，让内容延伸到状态栏和导航栏区域
    let decorView = window.getDecorView();
    decorView.setSystemUiVisibility(
        android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        | android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        | android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
    );

    console.log("导航栏和状态栏已设置为透明");
} else {
    console.log("当前设备不支持透明导航栏 (Android 5.0 及以上支持)");
}
*/

ui.start_button.on("click",()=>{//开始按钮点击事件：运行云端源码，也就是所谓的热更脚本，把你的脚本源代码放在服务器实现热更
    threads.start(function() {
        let url = "https://www.xcyg.cc/script.js"//运行的云端源码路径
        let res = http.get(url);
        let Source = res.body.string();
        // log(Source)
        if(res.statusCode==200){
            threads.start(function(){
                engines.execScript("script.js", Source,{
                    delay: 2000,
                    loopTimes: 3,
                    interval: 2000});
                setTimeout(function(){
                    ui.finish()
                },1000)
                
            })
        }
    });
});

ui.button_backToIndex.on("click",()=>{//退出按钮点击事件
 exit();
})


ui.button_savaKeyword.on("click",()=>{
    msgbox("提示","保存成功","好的");
});

ui.button_savaRisk.on("click",()=>{
    msgbox("提示","保存成功","好的");
});
//导入自定义弹窗
importClass(Packages.androidx.appcompat.app.AlertDialog);
importClass(Packages.android.graphics.drawable.GradientDrawable);
importClass(Packages.android.view.WindowManager);
function msgbox(title,text,buttonSure_Text,buttonCanel_Text){//自定义对话框函数，方便调用
    // 创建自定义视图
    let view = ui.inflate(
        <vertical gravity="center" padding="20">
            <text id="msg_title" text="" textSize="18sp" textStyle="bold" textColor="#161616"/>
            <text id="msg_text" text="" marginTop="5" textSize="15sp" textColor="#7D8592"/>
            <card id="msg_sure_Button" cardBackgroundColor="#E6EDF5" marginTop="10" foreground="?selectableItemBackground" w="*" h="auto" cardCornerRadius="10dp" cardElevation="0dp">
                <horizontal padding="10 10 10 10" gravity="center">
                <text id="msg_sure_ButtonText" text="" textColor="#3F8CFF"/>
                </horizontal>
            </card>
            <card id="msg_cancel_Button" cardBackgroundColor="#E6EDF5" marginTop="10" foreground="?selectableItemBackground" w="*" h="auto" cardCornerRadius="10dp" cardElevation="0dp">
                <horizontal padding="10 10 10 10" gravity="center">
                <text id="msg_cancel_ButtonText" text="" textColor="#F65160"/>
                </horizontal>
            </card>
        </vertical>
    );


    if(title==null){
        view.msg_title.setText("");
    }else{
        view.msg_title.setText(title);
    }

    if(text==null){
        view.msg_text.setText("");
    }else{
        view.msg_text.setText(text);
    }

    if(buttonSure_Text==null){
        view.msg_sure_ButtonText.setText("确定");
    }else{
        view.msg_sure_ButtonText.setText(buttonSure_Text);
    }
    
    if(buttonCanel_Text==null){
        view.msg_cancel_ButtonText.setText("取消");
        view.msg_cancel_Button.visibility=8;
    }else{
        view.msg_cancel_ButtonText.setText(buttonCanel_Text);
    }
    
    // 设置圆形背景
    let background = new GradientDrawable();
    background.setColor(android.graphics.Color.parseColor("#F4F9FD")); // 背景颜色
    background.setCornerRadius(40); // 圆形半径
    view.setBackground(background);

    // 创建对话框
    var builder = new AlertDialog.Builder(activity);
    builder.setView(view);
    var dialog = builder.create();

    // 设置对话框为无边框并显示
    dialog.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
    dialog.show();

    // 设置对话框大小为圆形
    let window = dialog.getWindow();
    let layoutParams = window.getAttributes();
    layoutParams.width = device.width-200; // 宽度
    
    window.setAttributes(layoutParams);

    view.msg_sure_Button.on("click", ()=>{
        dialog.dismiss(); // 关闭对话框
        log("自定义对话框_确定");
    })
    view.msg_cancel_Button.on("click", ()=>{
        dialog.dismiss(); // 关闭对话框
        log("自定义对话框_取消");
    })
};

readStorage();
function readStorage(){//读取用户配置
    darkMode = storage.get("darkMode");//读取深色模式
    if(darkMode == undefined){
        storage.put("darkMode", false);
        darkMode = storage.get("darkMode");

    }
    darkMode = storage.get("darkMode");
    console.log("上次用户是否点击过深色模式："+darkMode);
    if(storage.get("darkMode") == true){//如果上次用户是否点击过深色模式为true
        fun_darkmode();//渲染深色模式
        setTimeout(()=>{//延迟0.5秒再渲染是开启状态的自定义switch组件
            switch_Animate(ui.SwitchRound_dark,ui.Switch_dark,darkMode);
        },500);
    }

}

var fun1_isOn = false;
setTimeout(()=>{
    switch_Animate(ui.SwitchRound_fun1,ui.Switch_fun1,true);
    fun1_isOn = true;
},500);
ui.Switch_fun1.on("click", () => {
    fun1_isOn = !fun1_isOn;
    switch_Animate(ui.SwitchRound_fun1,ui.Switch_fun1,fun1_isOn);

});

var fun2_isOn = false;
ui.Switch_fun2.on("click", () => {
    fun2_isOn = !fun2_isOn;
    switch_Animate(ui.SwitchRound_fun2,ui.Switch_fun2,fun2_isOn);

});

$ui.seekbar_1.setOnSeekBarChangeListener({
    onProgressChanged: (seekbar, progress, fromUser) => {
       log('第一个滑块条进度: ', progress);
       ui.text_seekbar_1.setText(String(progress)+"%")
       
    },
});
$ui.seekbar_2.setOnSeekBarChangeListener({
    onProgressChanged: (seekbar, progress, fromUser) => {
       log('第二个滑块条进度: ', progress);
       ui.text_seekbar_2.setText(String(progress)+"%")
       
    },
});

ui.run(() => {
    let seekBar1 = ui.seekbar_1;
    // 修改进度条的颜色
    seekBar1.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#3399ff"), android.graphics.PorterDuff.Mode.SRC_IN);
    // 修改滑块的颜色
    seekBar1.getThumb().setColorFilter(android.graphics.Color.parseColor("#3399ff"), android.graphics.PorterDuff.Mode.SRC_IN);

    let seekBar2 = ui.seekbar_2;
    // 修改进度条的颜色
    seekBar2.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#3399ff"), android.graphics.PorterDuff.Mode.SRC_IN);
    // 修改滑块的颜色
    seekBar2.getThumb().setColorFilter(android.graphics.Color.parseColor("#3399ff"), android.graphics.PorterDuff.Mode.SRC_IN); 
    
});