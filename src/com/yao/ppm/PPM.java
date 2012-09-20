package com.yao.ppm;
import com.phonegap.*;



import android.os.Bundle;


public class PPM extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
    	 	super.onCreate(savedInstanceState);
    	 	setTheme(R.style.abc);
    	    	 	 
    	  super.setIntegerProperty("splashscreen",R.drawable.bg2);
          super.loadUrl("file:///android_asset/www/index.html");
         
          
         
    }
   
}
