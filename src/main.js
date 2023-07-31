
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    dialNumber1: 'UMBMini001@umb.com',
    dialNumber2: 'Helpdesk@umb.com',
    dialNumber3: 'scott.kern@umb.com',
    services: [],

    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) {
        this.dialNumber = params.get('number');
      }
      this.services = [
        { url: this.dialNumber1, name: 'Tech Support' },
        { url: this.dialNumber2, name: 'Help Desk' },
        { url: this.dialNumber3, name: 'Scott' },
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

