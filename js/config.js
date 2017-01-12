angular.module("enterprise.config", [])
    .constant("ENV", {
        // "name": "production",
        "accessToken": '',
        "debug": false,
        "api": "http://localhost/thinkphp_5.0.2_full",
        "appleId": 'id981408438',
        'ent_img_path':'img/enterprise',
        'ent_temp_path':'templates/enterprise',
        'version':'1.0.1'
    })
;
angular.module("jobseekers.config", [])
  .constant("ENV", {
    // "name": "production",
    "accessToken": '',
    "debug": false,
    "api": "http://localhost/thinkphp_5.0.2_full",
    "appleId": 'id981408438',
    'ent_img_path':'img/enterprise',
    'version':'1.0.1'
  })
;
