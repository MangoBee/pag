import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🖋 MangoBee", 
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "mangobee.github.io/blog",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Rajdhani",
        body: "PT Sans",
        code: "roboto condesed",
      },
      colors: {
        lightMode: {
          light: "#eceff4",       //Page background
          lightgray: "#d8dee9",   //Border color
          gray: "#4c566a",        //Graph links and heavier borders
          darkgray: "#434c5e",    //Body text
          dark: "#2e3440",        //Header text and icons
          secondary: "#4c566a",   //link text and current graph node
          tertiary: "2e3440",     //hover states and visited graph nodes
          highlight: "#d8dee9",   //internal link background
        },
        darkMode: {
          light: '#2e3440',       //Page background
          lightgray: '#434c5e',   //Border color
          gray: '#4c566a',        //Graph links and heavier borders
          darkgray: '#d8dee9',    //Body text
          dark: '#b48ead',        //Header text and icons
          secondary: '#a3be8c',   //link text and current graph node
          tertiary: '#eceff4',    //hover states and visited graph nodes
          highlight: '#3b4252'    //internal link background
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config