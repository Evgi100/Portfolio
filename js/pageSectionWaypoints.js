const pageSections = $(".section");
const headerLinks = $(".nav-link");

function createPageSectionWaypoints() {
  var that = this;
  pageSections.each(function() {
    var currentSection = this;
    new Waypoint({
      element: currentSection,
      handler: direction => {
        if (direction === "down") {
          var matchingHeaderLink = currentSection.getAttribute(
            "data-matching-link"
          );
          headerLinks.removeClass("is-current-link");
          $(matchingHeaderLink).addClass("is-current-link");
        }
      },
      offset: "18%"
    });
    new Waypoint({
      element: currentSection,
      handler: direction => {
        if (direction === "up") {
          var matchingHeaderLink = currentSection.getAttribute(
            "data-matching-link"
          );
          headerLinks.removeClass("is-current-link");
          $(matchingHeaderLink).addClass("is-current-link");
        }
      },
      offset: "-10%"
    });
  });
}

createPageSectionWaypoints();
