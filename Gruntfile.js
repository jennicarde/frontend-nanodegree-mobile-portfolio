module.exports = function(grunt) {

  /////////////////////
  // CONFIGURE GRUNT
  /////////////////////
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON("package.json"),

    // all configurations will go here
    uglify: {
        build: {
            src: "js/fontfaceobserver.js",
            dest: "js/fontfaceobserver.min.js"
        }
    },

    responsive_images: {
        myTask: {
          options: {
            sizes: [{
              width: 320,
            },{
              width: 640,
            },{
              width: 1024,
            }]
          },
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'img-src/',
            dest: 'img/'
          }],
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'views/images-src/',
            dest: 'views/images/'
          }]
        }
      },

    imagemin: {
        dynamic: {
            options: {
              optimizationLevel: 7
            },
            files: [{
                expand: true,
                cwd: "img/",
                src: ["**/*.{png,jpg,gif}"],
                dest: "img/"
            }],
            files:  [{
                expand: true,
                cwd: "views/images",
                src: ["**/*.{png,jpg,gif}"],
                dest: "views/images/"
            }]
        }
    },

    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'index.html': 'index.html',              // 'destination': 'source'
        }
      },
      dev: {                                       // Another target
        files: {
          'index.html': 'index.html',
        }
      }
    },

  });


  /////////////////////
  // LOAD GRUNT PLUGINS
  /////////////////////
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");

  // Default task(s).
  grunt.registerTask("default", ["uglify"]);
  grunt.registerTask("default", ["grunt-responsive-images"]);
  grunt.registerTask("default", ["imagemin"]);
  grunt.registerTask("default", ["htmlmin"]);
};
