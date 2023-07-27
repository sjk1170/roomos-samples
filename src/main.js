
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    dialNumber: '<a href="sip:scott.kern@umb.com">Call Scott</a>',
    services: [],

    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) {
        this.dialNumber = params.get('number');
      }
      this.services = [
        { url: this.dialNumber, name: 'Tech Support' },
        { url: this.dialNumber, name: 'Help Desk' },
        { url: this.dialNumber, name: 'Scott' },
      ];
    },
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
  });

}

document.addEventListener('alpine:init', setup);

