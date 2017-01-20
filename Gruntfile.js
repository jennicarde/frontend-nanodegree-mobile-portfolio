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
              width: 160,
              quality: 50,
            },{
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
          // When I ran this, the one above didn't run until I commented out the second one below.
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
              optimizationLevel: 5
            },
            files: [{
                expand: true,
                cwd: "img/",
                src: ["**/*.{png,jpg,gif}"],
                dest: "img/"
            }],
            // Same again, when I ran this, the one above didn't run until I commented out the second one below.
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

    // use custom extension for the output file
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        // Each of the files in the src/ folder will be output to
        // the dist/ folder each with the extension .gz.js
        files: [{
          expand: true,
          src: ['**/*.html'],
          dest: '',
          ext: '.gz.html'
        }]
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
  grunt.loadNpmTasks("grunt-contrib-compress");

  // Default task(s).
  grunt.registerTask("default", ["uglify"]);
  grunt.registerTask("default", ["grunt-responsive-images"]);
  grunt.registerTask("default", ["imagemin"]);
  grunt.registerTask("default", ["htmlmin"]);
  grunt.registerTask("default", ["compress"]);
};
