## Ionic Facebook Firebase Signin  

_To get started with Facebook sign in, we need to install a Capacitor plugin:_  
```
npm install capacitor-firebase-auth
npx cap update  
```  

### Basic Settings After Installing Plugin
1. In file `capacitor.config.json` config the providers list
```
[...]
  "plugins": {
    "CapacitorFirebaseAuth": {
      "providers": ["facebook.com"],
      "languageCode": "en",
      "nativeAuth": false,
      }
    }
[...]
```  

2. In file `android/app/src/main/java/.../MainActivity.java` add the reference to the Capacitor Firebase Auth plugin inside the Bridge initialization.  
```
[...]
import com.baumblatt.capacitor.firebase.auth.CapacitorFirebaseAuth; // <- add this line
// Initializes the Bridge
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  // Additional plugins you've installed go here
  // Ex: add(TotallyAwesomePlugin.class);
  add(CapacitorFirebaseAuth.class); // <- add this line
}});
[...]
```
### Facebook global configurations  

1. On the [Facebook for Developers site](https://developers.facebook.com/), get the App ID and an App Secret for your app  
2. Enable Facebook Login:  
    * In the [Firebase console](https://console.firebase.google.com/), open the Auth section.  
    * On the Sign in method tab, enable the Facebook sign-in method and specify the App ID and App Secret you got from Facebook.  
    * Then, make sure your OAuth redirect URI (e.g. my-app-12345.firebaseapp.com/__/auth/handler) is listed as one of your OAuth   redirect URIs in your Facebook app's settings page on the Facebook for Developers site in the Product Settings > Facebook Login config.
