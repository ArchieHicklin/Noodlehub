ShowJob = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      subscription: Meteor.subscribe('jobById', String(FlowRouter.getParam('_id'))),
      job: Jobs.findOne()
    };
  },

  createdAt() {
    return moment(this.data.job && this.data.job.createdAt).startOf('day').fromNow();
  },


  mailtoEmail() {
    return `mailto:${this.data.job && this.data.job.email}`;
  },

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="twelve columns show-job">
              <div className="row">
                <div className="twelve columns">
                  <h1>{this.data.job && this.data.job.title}</h1>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="three columns">
                  {this.data.job && this.data.job.company? (
                    <div>
                    <svg width="20px" height="20px" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fill-rule="evenodd">
                        <path d="m16.08 9.9h-4.266c-.582 0-.984.292-.984.904v10.316h6.563v-9.9c0-.726-.591-1.32-1.313-1.32" fill="#47b8e0"/>
                        <g fill="#fff"><path d="m11.878 11.55h-.131c-.144 0-.262.144-.262.319v9.25h.656v-9.25c0-.175-.118-.319-.262-.319"/>
                        <path d="m13.519 11.55h-.131c-.144 0-.262.144-.262.319v9.25h.656v-9.25c0-.175-.118-.319-.262-.319"/>
                      </g>
                      <path d="m4.266 11.22h-2.953c-.722 0-1.313.594-1.313 1.32v8.58h4.266v-9.9" fill="#5de0d2"/>
                      <g fill="#fff">
                        <path d="m3.117 13.86c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                      <path d="m3.117 16.5c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                      <path d="m3.117 19.14c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                    </g>
                    <g fill="#d6eef0">
                      <path d="m4.922 3.63c-.656 0-1.238.325-1.596.824-.214-.102-.449-.164-.701-.164-.794 0-1.456.567-1.607 1.32h-.033c-.544 0-.984.444-.984.99 0 .546.441.99.984.99h3.938c1.087 0 1.969-.887 1.969-1.98 0-1.094-.882-1.98-1.969-1.98"/>
                      <path d="m11.813 3.3c.125 0 .244.026.354.069.125-.786.798-1.389 1.614-1.389.656 0 1.22.391 1.482.953.224-.181.505-.293.815-.293.725 0 1.313.591 1.313 1.32 0 .729-.588 1.32-1.313 1.32h-4.266c-.544 0-.984-.444-.984-.99 0-.546.441-.99.984-.99"/>
                    </g>
                    <path d="m10.364 5.893l-2.353-2.398c-.255-.26-.673-.26-.928 0l-2.353 2.398c-.255.26-.464.774-.464 1.141v14.09h6.563v-14.09c0-.368-.209-.881-.464-1.141" fill="#fc9d9a"/>
                      <g fill="#fff">
                        <path d="m9.844 11.22c0 .181-.148.33-.328.33h-3.938c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h3.938c.18 0 .328.148.328.33v.66"/>
                        <path d="m9.844 13.86c0 .181-.148.33-.328.33h-3.938c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h3.938c.18 0 .328.148.328.33v.66"/>
                        <path d="m9.844 16.5c0 .181-.148.33-.328.33h-3.938c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h3.938c.18 0 .328.148.328.33v.66"/>
                        <path d="m9.844 19.14c0 .181-.148.33-.328.33h-3.938c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h3.938c.18 0 .328.148.328.33v.66"/>
                        <path d="m9.844 8.58c0 .181-.148.33-.328.33h-3.938c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h3.938c.18 0 .328.148.328.33v.66"/></g><path d="m19.688 6.27v-1.65c0-.365-.294-.66-.656-.66h-.984v-3.63c0-.182-.147-.33-.328-.33-.181 0-.328.148-.328.33v3.63h-.984c-.362 0-.656.295-.656.66v1.65c-.722 0-1.313.594-1.313 1.32v13.53h6.563v-13.53c0-.726-.591-1.32-1.313-1.32" fill="#5de0d2"/>
                        <g fill="#fff">
                          <path d="m17.227 8.25c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/><path d="m19.852 8.25c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                          <path d="m17.227 10.56c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                          <path d="m19.852 10.56c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                          <path d="m17.227 12.87c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                          <path d="m19.852 12.87c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                          <path d="m17.227 15.18c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                          <path d="m19.852 15.18c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                          <path d="m17.227 17.49c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                          <path d="m19.852 17.49c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/><path d="m17.227 19.8c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                          <path d="m19.852 19.8c0 .181-.148.33-.328.33h-.984c-.18 0-.328-.149-.328-.33v-.66c0-.182.148-.33.328-.33h.984c.18 0 .328.148.328.33v.66"/>
                        </g>
                      </g>
                    </svg>
                    <span className="company">{this.data.job.company}</span></div>
                  ) : null}
                  {this.data.job && this.data.job.homepage? (
                    <div><i className=""></i><svg width="20px" height="20px" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fill-rule="evenodd">
                        <path d="m19 10.164c0 5.432-4.253 9.836-9.5 9.836-5.247 0-9.5-4.404-9.5-9.836 0-1.436.297-2.801.832-4.03l10.14-5.688c.719.116 1.411.315 2.067.588l.209.498.358-.24c3.192 1.586 5.393 4.964 5.393 8.872" fill="#47b8e0"/>
                        <g fill="#5de0d2">
                          <path d="m1.743 6.521c.297.588.649-.196.622.392-.027.589.379 1.905.623 1.737.244-.169.243-1.132.677-1.252.433-.12 1.055-.877 1.245-.541.19.336.136.952.298.813.162-.14.378 0 .351.42-.027.42.352 1.01.46 1.233.108.224-.677-.645-1.055-1.177-.379-.532.27 1.121.758 1.737.487.616 2.327 1.065 2.814 1.318.487.252 1.814-.476 1.299-.448 0 0-1.163.168-1.596-.056-.433-.224-1.408-.224-1.57-.533-.162-.309-.162-.757-.46-1.177-.297-.42-.487-1.177-.081-.841.406.336.839.392.893.168.054-.224-.758-.981-.244-1.318.515-.336 1-.084 1.245-.336.244-.252.812-1.01.677-1.373-.136-.364-.163-.616 0-.729.162-.112-.785-.112-.406-.392.378-.28.784-.532.812 0 .027.532 0 1.01.189 1.01.19 0 .487-.588.406-.84-.082-.252.081-.812.46-.84.378-.028.812-.672.92-1.318.108-.646.108-1.149-.189-1.093-.262.049-.296-.337.08-.64-.479-.077-.971-.117-1.47-.117-3.859 0-7.182 2.384-8.668 5.806.309-.017.732.034.911.387"/><path d="m12.865 2.262c-.213.391.358-.156.74-.971-.186-.092-.374-.178-.566-.258.007.337-.007.922-.174 1.229"/><path d="m10.213 5.204c.433-.308 1.137-.308 1.137-.925 0-.616 1.705-1.681 1.299-1.652-.406.028-1.191.813-1.191.28 0-.532 0-1.513-.108-1.765-.133-.309-.058 1.429-.178 1.737-.121.308.015 1.373-.364 1.513-.379.14-1.029.42-1.029.813 0 .392 0 .308.433 0"/><path d="m10.706 10.396c.234.187-.126.71.126.598.253-.112.523.181.65.016.126-.165.144-.292.541.051.396.344.685.273.433 0-.253-.273-.487-.738-1.01-.897 0 0-.559-.066-.956-.253 0 0-.544-.299-.714-.112-.17.187-.147-.523-.276-.392-.129.13.069.56-.309.448-.379-.112-.505.019-.614-.299-.108-.318-.649-.15-.217-.392.433-.243.649-.318.667-.131.019.187.452-.168.289-.672-.162-.504-.596-.336-.577-.971.008-.29-.433.112-.361.467.073.355-.09.43-.252.71-.163.28-.83.934-1.01.934-.18 0-.126.374 0 .598.126.224.758.262.884.299.126.037.27-1.01.307-.729.036.28.09 1.121.18.934.09-.187.433.075.433-.112 0-.187-.144-.502.199-.326.343.176.812.289.794.083-.017-.206.56-.038.794.149m-2.093-2.186c.169.703-.234.803-.361.691-.126-.112.32-.862.361-.691"/><path d="m12.24 12.675c-.523-.486-.758-1.27-.884-1.382-.208-.186-.114.672-.183.84-.069.168-.376-.206-.52-.28-.145-.075-.054-.187 0-.336.054-.15-.271-.28-.523-.224-.253.056-.256-.019-.353.186-.098.206-.02.385-.276.248-.256-.136-.417.069-.598.275-.181.205-.252.28-.325.43-.073.149-1.064.056-1.064.541 0 .486.415.878.325 1.251-.091.373.073.766.379.579.307-.187.758-.131.884-.28.126-.15.974-.392 1.119-.112.144.28.307.432.559.44.252.008.289.251.289.438 0 .187.378.037.595.112.217.075.74.019.776-.411.036-.43.27-.729.361-.952.09-.224-.036-.878-.559-1.364"/><path d="m15.758 15.12c-.162.019-.289-.411-.397-.318-.212.183.253.616 0 .859-.252.243-.325.608-.523.64-.199.032-.505.331-.307.499.199.168.505 0 .614-.317.108-.318.199-.451.415-.543.217-.092.199-.354.397-.512.198-.159-.036-.327-.199-.308"/>
                        </g>
                      </g>
                    </svg>
                    <a className="homepage" href={this.data.job && this.data.job.homepage} target="_blank">{this.data.job && this.data.job.homepage}</a></div>
                  ) : null}
                  <i className=""></i>
                  <svg width="20px" height="20px" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd"><g fill="#fff0e6"><path d="m.178 12.54l5.443-5.371-4.19-5.697c-.201.249-.349.592-.391.969l-1.027 9.104c-.042.374.025.727.165.993"/><path d="m18.427.504l-7.87 6.93 6.202 7.938c.339-.27.585-.694.642-1.204l1.398-12.398c.058-.514-.093-.963-.372-1.267"/></g><path d="m.178 12.541c.13.246.321.42.552.462l14.937 2.664c.399.072.785-.046 1.094-.293l-6.202-7.938 7.868-6.931c-.25-.272-.601-.428-1.01-.403l-15.346.983c-.236.015-.461.164-.643.389l4.19 5.697" fill="#ffe4cf"/><path d="m8.409 6c.235 0 .451.11.566.248v.771c0 .117.006.213.012.303-.108.145-.33.262-.576.262-.431 0-.729-.358-.73-.792-.001-.434.297-.792.729-.792m2.749.619c.011-1.652-1.266-2.856-2.711-2.856-1.56 0-2.759 1.363-2.746 3.03.012 1.679 1.231 3.03 2.773 3.03.617 0 1.165-.227 1.595-.578l-.389-.626c-.342.296-.783.447-1.25.447-1.116 0-2.024-1.019-2.031-2.271-.007-1.266.913-2.271 2.055-2.271 1.059 0 2.01.867 2.01 2.099-.002.385-.081.964-.461.964-.133 0-.215-.069-.265-.158-.044-.083-.063-.172-.062-.385l.005-1.659h-.675v.145c-.223-.158-.465-.213-.694-.213-.586 0-1.329.537-1.325 1.48.004.977.796 1.48 1.384 1.48.43 0 .715-.213.867-.365.183.22.454.365.745.365.809 0 1.174-.764 1.18-1.652" fill="#fc9d9a"/>
                  </g>
                  </svg>
<a className="email" href={this.mailtoEmail()}>{this.data.job && this.data.job.email}</a>
                  <hr />
                  <svg width="20px" height="20px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path d="m30 55c13.807 0 25-11.193 25-25 0-13.807-11.193-25-25-25-13.807 0-25 11.193-25 25 0 13.807 11.193 25 25 25m0 5c-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30 16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30" fill="#31708f"/><g fill="#fc9d9a">
                      <path d="m28 9h4v27h-4z"/>
                      <path d="M25.934 35 24 31.418 44.07 19 46 22.586z"/>
                      <circle cx="30" cy="30" r="4"/>
                    </g>
                  </g>
                  </svg>
<span className="created-at">Posted on {this.createdAt()}</span>
                </div>
                <div className="nine columns">
                  <pre>{this.data.job && this.data.job.description}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
