window.VueStrapLang = (function () {
  var l = { //languages

    en: {
      daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      limit: 'Limit reached ({{limit}} items max).',
      loading: 'Loading...',
      minLength: 'Min. Length',
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      notSelected: 'Nothing Selected',
      required: 'Required',
      search: 'Search'
    },
    zh: {
      daysOfWeek: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      limit: '不得超过 ({{limit}}).',
      loading: '加载中...',
      minLength: '最小长度',
      months: [
        '一月', '二月', '三月', '四月', '五月', '六月',
        '七月', '八月', '九月', '十月', '十一月', '十二月'
      ],
      notSelected: '请选择',
      required: '必填',
      search: '搜索'
    }

  };

  /**
   * Some browsers handle short language code (eg. 'en'), others handle 5 chars (eg. 'en-US').
   * With aliases you can handle a group of similar languages, using a regular expresion.
   * If the language is not found, the default language is english.
   */
  var aliases = {
    en: /^en-[A-Z]{2}$/i,
    zh: /^zh-[A-Z]{2}$/i,
  };

  return function (lang) {
    lang = lang || 'en';
    var i, tr = {};
    for (i in aliases) {
      if (aliases[i].test(lang)) lang = i;
    }
    for (i in l.en) {
      tr[i] = (l[lang] && l[lang][i]) || l.en[i];
    }

    return tr;
  };
})();
