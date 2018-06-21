let languageGlobal = localStorage.getItem('i18nextLng') || 'en';

export default {
    NOT_MATCH_SOUND: {
        src: ['assets/sound/' + languageGlobal + '/notmatch.m4a', 'assets/sound/' + languageGlobal + '/notmatch.mp3']
    },
    NOTICE_SOUND: {
        src: ['assets/sound/' + languageGlobal + '/attention.m4a', 'assets/sound/' + languageGlobal + '/attention.mp3']
    },
    SUCCESS_SOUND: {
        src: ['assets/sound/' + languageGlobal + '/success.m4a', 'assets/sound/' + languageGlobal + '/success.mp3']
    },
    ALERT_SOUND: {
        src: ['assets/sound/' + languageGlobal + '/alarm.m4a', 'assets/sound/' + languageGlobal + '/alarm.mp3']
    },
    BEEP_SOUND: {
        src: ['assets/sound/' + languageGlobal + '/beep.m4a', 'assets/sound/' + languageGlobal + '/beep.mp3']
    },
    WRONG_WAREHOUSE: {
        src: ['assets/sound/' + languageGlobal + '/wrong_warehouse.m4a', 'assets/sound/' + languageGlobal + '/wrong_warehouse.mp3']
    },
    DUPLICATE_PACKAGE: {
        src: ['assets/sound/' + languageGlobal + '/duplicate_package.m4a', 'assets/sound/' + languageGlobal + '/duplicate_package.mp3']
    },
    NETWORK_ERROR: {
        src: ['assets/sound/' + languageGlobal + '/network_error.m4a', 'assets/sound/' + languageGlobal + '/network_error.mp3']
    },
    UNWEIGHTED: {
        src: ['assets/sound/' + languageGlobal + '/unweighted.m4a', 'assets/sound/' + languageGlobal + '/unweighted.mp3']
    },
}