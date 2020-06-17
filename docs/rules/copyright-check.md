# Checks if the copyright disclaimer is present at the beginning of the file. (copyright-check)


## Rule Details

This rule aims to ensure all the files contains the Copyright Disclaimer.

Examples of **correct** code for this rule:

```js
/* Copyright © 2017-2020 Ganchrow Scientific, SA all rights reserved */
```

```js
/* Copyright © 2020 Ganchrow Scientific, SA all rights reserved */
```
Examples of **incorrect** code for this rule:

```js
/* Copyright © 2011-2020 Ganchrow Scientific, SA all rights reserved */
```

```js
console.log('You should put the copyright at the beginning of the file')
```

```js
/* Copyright © Ganchrow Scientific, SA all rights reserved */
```


### Options
```js
'gs-rules/copyright-check': [
      'error',
      '/* Copyright © %%% Ganchrow Scientific, SA all rights reserved */',
      2015
    ]
```
#### First argument:
Provides Copyright disclaimer with the '%%%' markup to be replaced by the years range.
#### Second argument:
is the minimum start year for the years range.

