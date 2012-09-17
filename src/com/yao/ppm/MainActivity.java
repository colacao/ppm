package com.yao.ppm;
import com.phonegap.*;
import com.yao.ppm.*;


import android.os.Bundle;


public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
    	 super.onCreate(savedInstanceState);

          super.setIntegerProperty("splashscreen",R.drawable.bg2);
          super.loadUrl("file:///android_asset/www/index.html");
    }
   
}
