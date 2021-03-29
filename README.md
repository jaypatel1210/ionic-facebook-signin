## Ionic Facebook Firebase Signin  

-> To get started with Facebook sign in, we need to install a Capacitor plugin:  
```
npm install capacitor-firebase-auth
npx cap update  
```  

#### Basic Settings After Installing Plugin
1. In file capacitor.config.json config the providers list
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

2. In file android/app/src/main/java/.../MainActivity.java add the reference to the Capacitor Firebase Auth plugin inside the Bridge initialization.  
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