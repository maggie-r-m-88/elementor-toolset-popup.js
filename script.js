/* this works!! */
jQuery(document).ready(function($){

      function getProjects() {
                          
            var chosen = this.value
            if (chosen == "vendita"){
                console.log(chosen + " is selected")
                jQuery(".elementor-location-popup .top-search #filter_rp").show();
                jQuery(".elementor-location-popup .top-search #filter_sp").hide();
                
            }
            if (chosen == "affitto"){
                console.log(chosen + " is selected")
                jQuery(".elementor-location-popup .top-search #filter_rp").hide();
                jQuery(".elementor-location-popup .top-search #filter_sp").show();
                                
            }
      }

      function staticVersion(){
            var chosen = this.value
            if (chosen == "vendita"){
                console.log(chosen + " is selected")
                jQuery(".elementor-widget-toggle .top-search #filter_rp").show();
                jQuery(".elementor-widget-toggle .top-search #filter_sp").hide();
                
            }
            if (chosen == "affitto"){
                console.log(chosen + " is selected")
                jQuery(".elementor-widget-toggle .top-search #filter_rp").hide();
                jQuery(".elementor-widget-toggle .top-search #filter_sp").show();
                                
            }
      }
      jQuery(document).on("change", ".elementor-widget-toggle .js-wpv-filter-trigger", staticVersion);
   

      jQuery( document ).on( 'elementor/popup/show', () => {
            
          jQuery(".elementor-location-popup").on("change", ".js-wpv-filter-trigger", function() {
                  // here the value will updated anytime when button was clicked
                      //getProjects();
          });

          jQuery(document).on("change", ".js-wpv-filter-trigger", getProjects);
          
                
       
   });

});
