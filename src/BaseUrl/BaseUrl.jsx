
class BaseUrl{
    static BaseURL = 'http://127.0.0.1:8000/api';

    static AllBlog = this.BaseURL+'/allblog';
    static ResentBlog = this.BaseURL+'/resentblog';
    static FooterData = this.BaseURL+'/footer';
    static ContactSent = this.BaseURL+'/contactsent';
}

export default BaseUrl