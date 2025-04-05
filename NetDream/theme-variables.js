/*
 * Custom function used to generate the output of the theme variables; more about it can be found at https://getpublii.com/dev/theme-variables/
 */

var generateThemeVariables = function (params) {
    let output = '';

    output += ` 
        :root {
            --main-width: ${params.mainWidth};
            --navbar-background-color: ${params.navbarBackgroundColor};
            --navbar-text-color: ${params.navbarTextColor};
            --menubar-background-color: ${params.menubarBackgroundColor};
            --menubar-text-color: ${params.menubarTextColor};
            --submenu-background-color: ${params.submenuBackgroundColor};
            --submenu-text-color: ${params.submenuTextColor};
            --body-background-color: ${params.bodyBackgroundColor};
            --body-text-color: ${params.bodyTextColor};
            --body-link-color: ${params.bodyLinkColor};
            --body-visited-link-color: ${params.bodyVisitedLinkColor};
            --body-hover-link-color: ${params.bodyHoverLinkColor};
            --footer-link-color: ${params.footerLinkColor};
            --footer-visited-link-color: ${params.footerVisitedLinkColor};
            --footer-hover-link-color: ${params.footerHoverLinkColor};
            --header-background-color: ${params.headerBackgroundColor};
            --header-text-color: ${params.headerTextColor};
            --footer-background-color: ${params.footerBackgroundColor};
            --footer-text-color: ${params.footerTextColor};
            --border-color: ${params.borderColor};
        }`;

    return output;
}

module.exports = generateThemeVariables;