# HumanizeDuration.ts [![Build Status](https://travis-ci.org/Nightapes/HumanizeDuration.ts.svg?branch=master)](https://travis-ci.org/Nightapes/HumanizeDuration.ts)
361000 becomes "6 minutes, 1 second"

I have the time in milliseconds and I want it to become "30 minutes" or "3 days, 1 hour". Enter Humanize Duration!

##Origin


This is for of the typescript version of the javascript library "HumanizeDuration.js".
HumanizeDuration.ts repository is [here](https://github.com/Nightapes/HumanizeDuration.ts).

The thank goes to: Evan Hahn  ([Github](https://github.com/EvanHahn/HumanizeDuration.js))


##Installation

Via npm install (coming soon)

```
npm install @windup/humanize-duration-ts
```

##Basic usage
Import:
```
  import {HumanizeDuration} from 'HumanizeDurationTs'
```

Default language is English and it doesn't need to be imported. If you want 
 to add additional language, import it:
```
  import 'HumanizeDurationTS/languages/cs_CZ'
``` 

or you can import all languages:
```
  import 'HumanizeDurationTs/languages'
```


Setup instance:

```
  langService: HumanizeDurationLanguage = new HumanizeDurationLanguage();
  humanizer: HumanizeDuration = new HumanizeDuration(this.langService);
```

Usage: 

```
this.humanizer.humanize(12345678);
```



