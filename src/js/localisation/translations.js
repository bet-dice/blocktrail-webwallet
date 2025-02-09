angular.module('blocktrail.localisation', [
    'pascalprecht.translate'
])
    .config(function($translateProvider) {
        //init with device lang as default
        var availableLocales = [
            'en-GB',
            'en-US',
            'fr-FR',
            'de-DE',
            'nl-NL'
        ];
        var defaultLanguage = availableLocales.indexOf(navigator.language) > -1 ? navigator.language : 'en-GB';
        var english = {
            //general
            LOGOUT: 'logout',
            SEND: 'send',
            RECEIVE: 'receive',
            BACK: 'back',
            GO_BACK: 'go back',
            NEXT: 'next',
            CONTINUE: 'continue',
            CANCEL: 'cancel',
            OK: 'OK',
            DONE: 'done',
            CONFIRM: 'confirm',
            APPLY: 'apply',
            SYNC: 'sync',
            SYNC_NOW: 'sync now',
            OPTIONAL: 'optional',
            SUCCESS: 'success',
            COMPLETE: 'complete',
            THANKS_1: 'thanks',
            THANKS_2: 'thank you',
            FAIL: 'failed',
            LOADING: 'loading',
            SAVING: 'saving',
            WORKING: 'working',
            VERIFYING: 'verifying',
            SYNCING: 'syncing',
            SKIP_STEP: 'skip this step',
            PLEASE_WAIT: 'please wait',
            PLEASE_WAIT_2: 'just a sec',
            NONE: 'none',
            TAKEN: 'taken',
            SEARCH: 'search',
            STATUS: 'status',
            COPY: 'copy',
            EMAIL: 'email',
            SMS: 'SMS',
            ERROR_TITLE_1: 'oh dear',
            ERROR_TITLE_2: 'oops',
            ERROR_TITLE_3: 'error',
            ION_REFRESHER: 'Pull to refresh...',
            BALANCE: 'balance',
            BALANCE_AVAILABLE: 'available balance',
            BALANCE_CONFIRMED: 'confirmed balance',
            BALANCE_UNCONFIRMED: 'unconfirmed balance',
            TRANSACTIONS: 'transactions',
            WELCOME: 'welcome',
            TWO_FACTOR_TOKEN: '2FA token',

            //launch & setup screens
            'LAUNCH_NEW_ACCOUNT': 'create a new account',
            'LAUNCH_EXISTING_ACCOUNT': 'already have an account?',
            'SETUP_FORGOT_PASSWORD': 'Reset your password',
            'SETUP_FORGOT_PASSWORD_Q': 'forgot password?',
            'SETUP_FORGOT_PASS_PLACEHOLDER' : 'email address',
            'SETUP_LOGIN': 'sign in',
            'LOGGING_IN': 'signing in',
            'SETUP_LOGIN_PLACEHOLDER': 'username or email',
            'SETUP_USERNAME_PLACEHOLDER': 'username',
            'SETUP_EMAIL_PLACEHOLDER': 'email',
            'SETUP_PASSWORD_PLACEHOLDER': 'password',
            'SETUP_PASSWORD_REPEAT_PLACEHOLDER': 'password repeat',
            'SETUP_PIN_PLACEHOLDER': 'Create a PIN',
            'SETUP_PIN_REPEAT_PLACEHOLDER': 'Repeat PIN',
            'SETUP_LOGIN_FAILED': 'login failed',
            'SETUP_REGISTER': 'create new wallet',
            'SETUP_EXISTING_WALLET': "existing wallet found",
            'SETUP_WALLET_PASSWORD': "wallet password",
            'SETUP_WALLET_BACKUP': 'Download your wallet backup',
            'SETUP_WALLET_BACKUP_CHECKBOX' : 'please confirm that you have saved your wallet recovery phrases',
            'SETUP_WALLET_BACKUP_TEXT': 'before you start using your new wallet, please',
            'SETUP_WALLET_BACKUP_TEXT_BOLD': 'download the below backup document',
            'SETUP_WALLET_BACKUP_TEXT_APPEND': 'It is important to keep this backup confidential and to store it securely offline. In case of emergency, this backup document lets you access and recover any funds stored on the wallet.',
            'BACKUP_EMAIL_PDF': 'email backup PDF',
            'BACKUP_CREATE_PDF': 'download wallet backup',
            'BACKUP_CHECKBOX': 'I saved my backup securely',
            'SETUP_PHONE': 'setup phone',
            'SETUP_SYNC_CONTACTS': 'sync contacts',
            'SETUP_PROFILE_PIC': 'set profile picture',
            'SETUP_COMPLETE': "go to my wallet",
            'CREATING_ACCOUNT': 'creating account',
            'CREATING_WALLET': 'creating wallet',
            CREATING_GENERATE_PRIMARYKEY: 'generating primary key',
            CREATING_GENERATE_BACKUPKEY: 'generating backup key',
            CREATING_SUBMIT_WALLET: 'synchronizing with servers',
            CREATING_INIT_WALLET: 'initialising wallet',
            CREATING_DONE: 'Done. Redirecting...',
            'SAVING_WALLET': 'saving wallet',
            'LOADING_WALLET': 'loading wallet',
            'MSG_BAD_NETWORK': 'no network connection',
            'MSG_BAD_LOGIN': 'incorrect login details',
            'MSG_INCORRECT_PASSWORD': 'incorrect password',
            'MSG_INCORRECT_PASSWORD_CAPS_ON': 'warning; you had your caps-lock on while typing in the password!',
            'MSG_MISSING_LOGIN': 'please enter your login details',
            'MSG_MISSING_PASSWORD': 'please enter your password',
            'MSG_MISSING_TWO_FACTOR_TOKEN': 'please enter your two-factor authentication token',
            'MSG_INCORRECT_TWO_FACTOR_TOKEN': 'incorrect two-factor authentication token',
            'MSG_INVALID_USERNAME': 'invalid username',
            'MSG_BAD_USERNAME': 'please choose a username with at least 4 alphanumeric characters',
            'MSG_BAD_PASSWORD': 'please enter a valid password',
            'MSG_BAD_PASSWORD_REPEAT': "the passwords don't match",
            'MSG_USERNAME_TAKEN': 'that username already taken',
            'MSG_BAD_EMAIL': 'invalid email',
            'MSG_EMAIL_TAKEN': 'that email is already taken',
            'MSG_UPGRADE_REQUIRED': "Please login on the developers platform (<a href='https://www.blocktrail.com/dev/login' target='_blank'>www.blocktrail.com/dev/login</a>) first to automatically upgrade your account and enable the wallet",
            'MSG_PIN_HELP': "Create a PIN which you will use to unlock your wallet to make transaction",
            'MSG_WALLET_PASSWORD_MISMATCH': "You have an existing wallet which was created with a different password",
            'MSG_WALLET_PASSWORD': "please enter the old wallet password",
            'MSG_REPEAT_PASSWORD': "please repeat your password",
            'MSG_SAVE_BACKUP': "please save a backup to continue",
            'MSG_BACKUP_EMAIL_SUBJECT_1': 'BlockTrail mobile wallet backup',
            'MSG_BACKUP_EMAIL_BODY_1': 'your mobile wallet backup document is attached.\nStore it in a safe place.' +
                                        'you will need it along with your current password to recover your wallet in an emergency.',


            //side menu
            MY_WALLET: 'my wallet',
            SEND_FEEDBACK: 'send feedback',

            //My Wallet screen
            INTERNAL_TRANSACTION_TITLE: 'sent to self',
            WALLET_NO_TXS: 'no transactions, yet',
            WALLET_ACTION_PRE: 'get started by',
            WALLET_ACTION_LINK: 'funding your wallet',
            WALLET_NO_MORE_TXS: 'no more transactions',
            TX_INFO_SENT: 'sent bitcoin',
            TX_INFO_RECEIVED: 'received bitcoin',
            TX_INFO_HASH: 'transaction ID',
            TX_INFO_TIME_SUBTITLE: 'at time of transaction',
            TX_INFO_TIME_SUBTITLE_2: 'at current price',
            TX_INFO_DATE_SENT: 'date sent',
            TX_INFO_DATE_RECEIVED: 'date received',
            TX_INFO_PENDING: 'pending',
            TX_INFO_CONFIRMATIONS_TITLE: 'confirmations',
            TX_INFO_SENT_TO: 'sent to',
            TX_INFO_RECEIVED_FROM: 'received from',
            TX_INFO_MESSAGE_TITLE: 'message/reference',
            TX_INFO_MORE_TITLE: "more info",
            TX_INFO_MORE_LINK: "see on blocktrail.com",

            //Sending screens
            QR: 'QR',
            CONTACTS: 'contacts',
            BLUETOOTH: 'bluetooth',
            BITCOIN_ADDRESS: 'address',
            SENDING: 'sending',
            SEARCH_CONTACTS: 'Search Contacts...',
            SEND_TO: 'recipient address',
            SEND_ADDRESS_FOUND: 'address copied',
            SEND_MESSAGE_PLACEHOLDER: 'Message or payment reference...',
            WALLET_PIN: 'wallet PIN',
            TRANSACTION_SEND_SUCCESS: 'Transaction Sent',
            WALLET_PASSWORD: 'Wallet Password',
            AMOUNT: 'amount',
            TWO_FACTOR_TOKEN_DESC: 'a two-factor authentication token is required to send transactions.',
            TO: 'to',
            SENDING_CONFIRM_TITLE:'Confirm your password',
            SENDING_CONFIRM_MSG: 'You are sending',
            ESITIMATED_FEE: 'Network fee: ',

            //messages
            MSG_GET_CONTACT_ADDR: 'getting contact address...',
            MSG_INIT_WALLET: 'initialising wallet...',
            MSG_SENDING: 'sending...',
            MSG_MISSING_AMOUNT: 'please enter a valid amount',
            MSG_MISSING_RECIPIENT: 'please specify a recipient',
            MSG_INVALID_RECIPIENT: 'invalid recipient',
            MSG_INSUFFICIENT_FUNDS: 'insufficient funds',
            MSG_BAD_PIN: 'incorrect pin',
            MSG_BAD_PWD: 'incorrect password',
            MSG_BAD_ADDRESS: 'invalid bitcoin address',
            MSG_BAD_CONTACT: 'unable to get an address for that contact',
            MSG_BAD_CLIPBOARD: 'no valid address found in clipboard',
            MSG_CLIPBOARD_ADDRESS: 'an address was found in your clipboard',
            MSG_SEND_FAIL_UNKNOWN: 'there was a problem sending your transaction',

            //contacts list
            CONTACTS_NONE: 'no contacts found',
            CONTACTS_NO_WALLETS: 'none of your contacts have a BlockTrail wallet',
            CONTACTS_INVITE: 'invite to Wallet',
            CONTACTS_MORE_NUMBERS: 'more',
            CONTACTS_FILTER_TITLE: 'filter contacts',
            CONTACTS_SHOW_ALL: 'all contacts',
            CONTACTS_WALLETS_ONLY: 'with wallets',
            CONTACTS_REFRESH: 'refresh contacts',
            CONTACTS_RESYNC: 're-sync contacts',
            MSG_INVITE_CONTACT: 'Hi, get the BlockTrail Wallet app for Bitcoin!\nDownload it here: https://www.blocktrail.com/mywallet/download',

            //Receiving Screens
            BITCOIN_ADDRESS_RECEIVE_HELP: 'A new bitcoin address has been created for you. Use this address to receive funds.',
            REQUEST_SEND: 'send request',
            MSG_REQUEST_EMAIL_SUBJECT_1: 'Please send me bitcoins',
            MSG_REQUEST_EMAIL_BODY_1: 'Hi,<br><br>Please send funds to my Bitcoin wallet (QR code attached).'
                            + "<p>Address: <a href='{{addressURI}}'>{{address}}</a> "
                            //+ '<p><img src="{{qrcode}}" alt="qrcode"/></p>'
                            + '<p><br>Sent with <a href="http://blocktrail.com">Wallet by BlockTrail</a></p>',
            MSG_REQUEST_EMAIL_SUBJECT_2: 'Please send me {{btcValue}} bitcoins (approx {{fiatValue}} {{localCurrency}})',
            MSG_REQUEST_EMAIL_BODY_2: 'Hi,<br><br>Please send funds to my Bitcoin wallet (QR code attached).'
                            + "<p>Address: <a href='{{addressURI}}'>{{address}}</a> "
                            + '<br>Amount: {{btcValue}} BTC (approx {{fiatValue}} {{localCurrency}})</p>'
                            //+ '<p><img src="{{qrcode}}" alt="qrcode"/></p>'
                            + "<p><br>Sent with my <a href='http://blocktrail.com'>BlockTrail Wallet</a></p>",
            MSG_REQUEST_SMS_1: 'Hi,\nPlease send funds to my Bitcoin wallet.\nAddress: {{address}}',
            MSG_REQUEST_SMS_2: 'Hi,\nPlease send {{btcValue}} BTC (approx {{fiatValue}} {{localCurrency}}) to my Bitcoin wallet.\nAddress: {{address}}',

            //Settings page
            SETTINGS: 'settings',
            SETTINGS_ACCOUNT: 'account',
            SETTINGS_PROFILE: 'profile',
            SETTING_USERNAME: 'username',
            SETTINGS_TAKE_PHOTO: 'take a photo',
            SETTINGS_CHOOSE_PHOTO: 'choose a photo',
            SETTINGS_REMOVE_PHOTO: 'remove photo',
            SETTINGS_CURRENCY: 'currency',
            SETTINGS_LANGUAGE: 'language',
            SETTINGS_WALLET: 'wallet',
            SETTINGS_CURRENT_WALLET: 'current wallet',
            SETTINGS_CHANGE_PIN: 'change pin',
            SETTINGS_CHANGE_PASSWORD: 'change password',
            SETTINGS_RECOMMENDED: 'recommended',
            SETTINGS_NEWSLETTER: 'Keep me updated with Blocktrail news',
            SETTINGS_RESET_ACCOUNT: 'reset wallet',
            SETTINGS_WALLET_BACKUP: 'wallet backup',
            SETTINGS_INFO: 'info',
            SETTINGS_ABOUT: 'about',
            SETTINGS_VERSION: 'version',
            SETTINGS_DEVELOPMENT: 'development',
            SETTINGS_WALLET_POLLING: 'wallet polling',
            SETTINGS_PHONE: 'phone',
            SETTINGS_CONTACTS_SYNC: 'contacts sync',
            SETTINGS_CONTACTS_SYNCED: 'synced',
            SETTINGS_CONTACTS_UNSYNCED: 'not synced',
            SETTINGS_PHONE_NUMBER: 'phone number',
            SETTINGS_PHONE_UPDATE: 'update phone',
            SETTINGS_PHONE_CHANGE: 'change phone',
            SETTINGS_PHONE_RESEND: 'resend code',
            SETTINGS_PHONE_REMOVE: 'remove phone',
            SETTINGS_PHONE_CHANGE_COUNTRY: 'change country',
            SETTINGS_PHONE_PLACEHOLDER: 'phone number',
            SETTINGS_TOKEN_PLACEHOLDER: 'verification code',
            SETTINGS_PHONE_REQUIRE_VERIFY: 'phone verification required',
            SETTINGS_PROFILE_PICTURE: 'Profile Picture',
            SETTINGS_SAVE: 'Save Settings',

            SETTINGS_CROP_PROFILE_PIC: 'crop your profile picture',
            SETTINGS_CROP_ALLOWED_FILE_TYPES: 'allowed file types',
            SETTINGS_PROFILE_PIC_SAVED: 'your profile picture has been saved',

            SETTINGS_2FA: 'two-factor authentication',
            SETTINGS_2FA_STEP1: 'step 1. verify password',
            SETTINGS_2FA_STEP1_BODY: 'please enter your password to set up two-factor authentication',
            SETTINGS_2FA_PASSWORD: 'password',
            SETTINGS_2FA_STEP2: 'step 2. account setup',
            SETTINGS_2FA_STEP2_BODY: 'download <a href="https://support.google.com/accounts/answer/1066447?hl=en">google authentication</a>' +
            ' or <a href="https://www.authy.com/users">Authy</a> on your smartphone and scan the QRCode below to add Blocktrail to your app.',
            SETINGS_2FA_STEP2_CODE: 'or manually enter this code: {{ secret }}.',
            SETTINGS_2FA_STEP3: 'step 3. verification',
            SETTINGS_2FA_STEP3_BODY: 'enter a token from your smartphone app to verify everything is working.',
            SETTINGS_2FA_VERIFY_TOKEN: 'verify token',
            SETTINGS_2FA_DONE: 'successfully set up two-factor authentication!',
            SETTINGS_2FA_DISABLE_BODY: 'enter a token from your smartphone app to disable two-factor authentication.',
            SETTINGS_2FA_DISABLE_2FA: 'disable 2FA',
            SETTINGS_2FA_HELP: 'secure your account using multi-device authentication',
            SETTINGS_2FA_DISABLE_DONE: 'your two-factor authentication is now disabled!',

            'SETTINGS_CURRENT_PIN': 'Current PIN',
            'SETTINGS_NEW_PIN': 'New PIN',
            'SETTINGS_REPEAT_PIN': 'Repeat PIN',
            'MSG_ARE_YOU_SURE': "are you sure?",
            'MSG_RESET_WALLET': "Resetting your wallet will delete all data from the app.\nYou can then login again to reload your wallet or create a new account and wallet.\nWould you like to continue?",
            'MSG_ENTER_PIN': 'please enter your current PIN',
            'MSG_ENTER_NEW_PIN': 'enter a new PIN (min 4 numbers)',
            'MSG_REPEAT_PIN': 'please repeat the PIN',
            'MSG_BAD_PIN_REPEAT': "the PINs don't match",
            'MSG_BAD_PIN_LENGTH': 'the new PIN must be at least 4 numbers',
            'MSG_TRY_AGAIN': 'please try again',
            'MSG_PIN_CHANGED': 'your PIN has been changed',

            SEND_PHONE_NUMBER_REQUIRED: "To be able to send bitcoin to contacts in your phone's address book you need to provide your phone number.",
            SEND_PHONE_NUMBER_REQUIRED_IOS: "To be able to send bitcoin to contacts in your phone's address book you need to provide your phone number " +
                                        "and give access to your contacts.",
            //messages
            SETTINGS_PHONE_VERIFIED: 'verified',
            SETTINGS_PHONE_UNVERIFIED: 'unverified',
            MSG_BAD_TOKEN: 'invalid or expired token',
            MSG_PHONE_UPDATED: 'A code has been sent to your phone for verification',
            MSG_PHONE_VERIFIED: 'your phone has been verified',
            MSG_PHONE_REQUIRE_VERIFY: "please verify your phone to continue",

            //feedback
            FEEDBACK: 'feedback',
            SEND_FEEDBACK_PLACEHOLDER: 'your message...',
            MSG_BAD_FEEDBACK: 'please enter a message',
            MSG_FEEDBACK_SUCCESS: 'your feedback has been sent',

            //languages
            ENGLISH: 'english',
            ENGLISH_US: 'english (US)',
            FRENCH: 'french',
            GERMAN: 'german',
            DUTCH: 'dutch',

            // change password
            CHANGE_PASSWORD: 'change password',
            ENTER_CURRENT_PASSWORD: "please enter your current password",
            ENTER_NEW_PASSWORD: "please enter your new password",
            ENTER_REPEAT_PASSWORD: "please repeat your new password",
            CHANGE_PASSWORD_WALLET_INPROGRESS: "please wait while we encrypt your wallet with your new password",
            CHANGE_PASSWORD_ACCOUNT_INPROGRESS: "please wait while we update your password for your account",
            CHANGE_PASSWORD_SUCCESS: 'your password has been changed!',
            CHANGE_PASSWORD_BACKUP: 'your password has been updated! <br />' +
                                    'because your old backup will not work with the new password you need to download 1 extra page ' +
                                    'and store that with the existing document!',

            //permission popups
            PERMISSION_REQUIRED: 'permission required',
            PERMISSION_REQUIRED_CONTACTS: 'Wallet needs access to your contacts',
            PERMISSION_REQUIRED_CAMERA: 'Wallet needs access to your camera',
            PERMISSION_REQUIRED_PHOTOS: 'Wallet needs access to your photos',
            MSG_CONTACTS_PERMISSIONS: 'To grant access to your contacts go to settings>BlockTrail Wallet>Contacts',
            MSG_CAMERA_PERMISSIONS: 'To grant access to your camera go to settings>BlockTrail Wallet>App.photo',
            MSG_PHOTOS_PERMISSIONS: 'To grant access to your photos go to settings>BlockTrail Wallet>Photos'
        };
        var americanEnglish = angular.extend(angular.copy(english), {
            MSG_INIT_WALLET: 'initializing wallet...',
        });
        var french = angular.extend(angular.copy(english), {
            //general
            SEND: 'envoyer',
            RECEIVE: 'recevoir',
            BACK: 'précédent',
            GO_BACK: 'précédent',
            NEXT: 'suivant',
            CONTINUE: 'suivant',
            CANCEL: 'annuler',
            OK: 'OK',
            DONE: 'fini',
            CONFIRM: 'confirmer',
            APPLY: 'appliquer',
            SYNC: 'synchroniser',
            SYNC_NOW: 'synchroniser',
            OPTIONAL: 'optionnel',
            SUCCESS: 'succès',
            COMPLETE: 'complet',
            FAIL: 'manqué',
            LOADING: 'chargement',
            SAVING: 'sauvegarder',
            WORKING: 'travail',
            VERIFYING: 'vérifier',
            SYNCING: 'en synchronisation',
            SKIP_STEP: 'sauter cette étape',
            NONE: 'aucun',
            TAKEN: 'occupé',
            SEARCH: 'recherche',
            STATUS: 'statut',
            COPY: 'copie',
            EMAIL: 'email',
            SMS: 'SMS',
            ERROR_TITLE_1: 'erreur',
            ERROR_TITLE_2: 'oops',
            ERROR_TITLE_3: 'erreur',
            ION_REFRESHER: 'Glisser pour rafraîchir...',
            BALANCE: 'solde',
            BALANCE_AVAILABLE: 'solde disponible',
            BALANCE_CONFIRMED: 'solde confirmée',
            BALANCE_UNCONFIRMED: 'solde non confirmée',
            TRANSACTIONS: 'transactions',

            //side menu
            MY_WALLET: 'mon portefeuille',
            //SEND_FEEDBACK: "retour d'information",        //too long
            SEND_FEEDBACK: "commentaires",

            //My Wallet screen
            INTERNAL_TRANSACTION_TITLE: 'envoyé à vous-même',
            WALLET_NO_TXS: 'pas de transactions',
            WALLET_NO_MORE_TXS: 'pas plus de transactions',
            TX_INFO_SENT: 'bitcoin envoyé',
            TX_INFO_RECEIVED: 'bitcoin recevu',
            TX_INFO_HASH: 'transaction hash',
            TX_INFO_TIME_SUBTITLE: "au moment de la transaction",
            TX_INFO_TIME_SUBTITLE_2: "au prix courant",
            TX_INFO_DATE_SENT: "date d'envoi",
            TX_INFO_DATE_RECEIVED: 'date de réception',
            TX_INFO_PENDING: 'en attendant',
            TX_INFO_CONFIRMATIONS_TITLE: 'confirmations',
            TX_INFO_SENT_TO: 'envoyé à',
            TX_INFO_RECEIVED_FROM: 'reçu de',
            TX_INFO_MESSAGE_TITLE: 'message/référence',

            //Sending screens
            QR: 'QR',
            CONTACTS: 'contacts',
            BLUETOOTH: 'bluetooth',
            BITCOIN_ADDRESS: 'adresse bitcoin',
            SENDING: 'envoi',
            SEARCH_CONTACTS: 'Recherche...',
            SEND_TO: 'envoyer à',
            SEND_MESSAGE_PLACEHOLDER: 'Message ou référence de paiement...',
            WALLET_PIN: 'PIN du portefeuille',
            TRANSACTION_SEND_SUCCESS: 'votre transaction a été envoyé',
            //messages
            MSG_GET_CONTACT_ADDR: "obtenir l'adresse de contact...",
            MSG_INIT_WALLET: 'portefeuille initialisation...',
            MSG_SENDING: 'envoyé...',
            MSG_MISSING_AMOUNT: "s'il vous plaît entrer un montant en bitcoins",
            MSG_MISSING_RECIPIENT: "s'il vous plaît entrer un bénéficiaire",
            MSG_INSUFFICIENT_FUNDS: 'pas assez de fonds pour cette transaction',
            MSG_BAD_PIN: 'mauvais code PIN',
            MSG_BAD_PWD: 'mauvais mot de passe',
            MSG_BAD_ADDRESS: 'adresse Bitcoin invalide',
            MSG_BAD_CONTACT: "incapable d'obtenir une adresse de ce contact",
            MSG_BAD_CLIPBOARD: "pas d'adresse Bitcoin trouvé dans le presse-papiers",
            MSG_SEND_FAIL_UNKNOWN: "il y avait un problème d'envoi",


            //contacts list
            CONTACTS_SHOW_ALL_BUTTON: 'afficher tous',
            CONTACTS_WALLETS_ONLY_BUTTON: 'masquer sans portefeuilles',

            //Receiving Screens
            REQUEST_SEND: 'envoyer une demande',
            MSG_REQUEST_EMAIL_SUBJECT_1: "S'il vous plaît envoyez-moi bitcoins",
            MSG_REQUEST_EMAIL_BODY_1: "Bonjour,<br><br>s'il vous plaît envoyer bitcoins à mon portefeuille."
            + "<p>Adress: <a href='{{addressURI}}'>{{address}}</a> "
                //+ '<p><img src="{{qrcode}}" alt="qrcode"/></p>'
            + '<p><br>envoyé avec <a href="http://blocktrail.com">Wallet by BlockTrail</a></p>',
            MSG_REQUEST_EMAIL_SUBJECT_2: "S'il vous plaît envoyez-moi {{btcValue}} bitcoins (environ {{fiatValue}} {{localCurrency}})",
            MSG_REQUEST_EMAIL_BODY_2: "Bonjour,<br><br>s'il vous plaît envoyer bitcoins à mon portefeuille."
            + "<p>Adress: <a href='{{addressURI}}'>{{address}}</a> "
            + '<br>Somme: {{btcValue}} BTC (environ {{fiatValue}} {{localCurrency}})</p>'
                //+ '<p><img src="{{qrcode}}" alt="qrcode"/></p>'
            + "<p><br>envoyé avec <a href='http://blocktrail.com'>Wallet by BlockTrail</a></p>",
            MSG_REQUEST_SMS_1: "Bonjour,\ns'il vous plaît envoyer bitcoins à mon portefeuille Bitcoin.\nAdress: {{address}}",
            MSG_REQUEST_SMS_2: "Bonjour,\ns'il vous plaît envoyer {{btcValue}} BTC (environ {{fiatValue}} {{localCurrency}}) a mon portefeuille Bitcoin.\nAddress: {{address}}",

            //Settings page
            SETTINGS: 'paramètres',
            SETTINGS_ACCOUNT: 'compte',
            SETTINGS_PROFILE: 'profil',
            SETTING_USERNAME: "nom d'utilisateur",
            SETTINGS_TAKE_PHOTO: 'prendre une photo',
            SETTINGS_CHOOSE_PHOTO: 'choisir une photo',
            SETTINGS_REMOVE_PHOTO: 'supprimer la photo',
            SETTINGS_CURRENCY: 'monnaie',
            SETTINGS_LANGUAGE: 'langue',
            SETTINGS_WALLET: 'portefeuille',
            SETTINGS_CURRENT_WALLET: 'portefeuille actuel',
            SETTINGS_CHANGE_PIN: 'changer le code PIN',
            SETTINGS_RESET_ACCOUNT: 'portefeuille réinitialisation',
            SETTINGS_WALLET_BACKUP: 'sauvegarde de portefeuille',
            SETTINGS_DEVELOPMENT: 'développement',
            SETTINGS_WALLET_POLLING: 'auto rafraîchissement',
            SETTINGS_PHONE: 'téléphone',
            SETTINGS_PHONE_NUMBER: 'numéro',
            //SETTINGS_PHONE_NUMBER: 'numéro de téléphone', //too long

            SEND_PHONE_NUMBER_REQUIRED: "To be able to send bitcoin to contacts in your phone's address book you need to provide your phone number.",
            SEND_PHONE_NUMBER_REQUIRED_IOS: "To be able to send bitcoin to contacts in your phone's address book you need to provide your phone number " +
            "and give access to your contacts.",
            //messages
            SETTINGS_PHONE_VERIFIED: 'vérifié',
            SETTINGS_PHONE_UNVERIFIED: 'non vérifié',
            MSG_BAD_TOKEN: 'token valide ou périmé',
            MSG_PHONE_UPDATED: 'A code has been sent to your phone for verification',
            MSG_PHONE_VERIFIED: 'your phone has been verified',

            //feedback
            FEEDBACK: 'commentaires',
            SEND_FEEDBACK_PLACEHOLDER: 'vos commentaires...',
            MSG_BAD_FEEDBACK: "s'il vous plaît entrer un message",
            MSG_FEEDBACK_SUCCESS: 'votre commentaire a été envoyé',

            //languages
            ENGLISH: 'anglais',
            ENGLISH_US: 'anglais (etais unis)',
            FRENCH: 'francais',
            GERMAN: 'allemand',
            DUTCH: 'néederlandais',
        });
        var german = angular.extend(angular.copy(english), {
            TITLE: 'Hallo',
            FOO: 'Dies ist ein Paragraph.',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch',
        });
        var dutch = angular.extend(angular.copy(english), {});
        var russian = angular.extend(angular.copy(english), {});


        $translateProvider.translations('en-GB', english);
        $translateProvider.translations('en-US', americanEnglish);
        $translateProvider.translations('fr-FR', french);
        $translateProvider.translations('de-DE', german);
        $translateProvider.translations('nl-NL', dutch);

        $translateProvider.preferredLanguage(defaultLanguage);
    })
;
