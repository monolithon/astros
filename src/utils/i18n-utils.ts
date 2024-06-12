import { blog, categories, links } from "./translatedPaths";

const languages = {
  en: "English",
  hu: "Hungary",
};

export const defaultLang = "en";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export const getTranslatedUrl = (
  url: URL,
): {
  englishHref: string;
  hungaryHref: string;
} => {
  const currentUrl = url.pathname;
  var englishHref: string = "/";
  var hungaryHref: string = "/hu/";

  if (currentUrl.startsWith("/hu/")) {
    if (currentUrl.startsWith("/hu/blog/category/")) {
      const param = currentUrl.split("category")[1].replaceAll("/", "");
      const prams = categories[decodeURIComponent(param)];
      const url = currentUrl.replace(param, prams).replace("/hu", "");
      englishHref = url;
      hungaryHref = decodeURIComponent(currentUrl);
      return {
        englishHref,
        hungaryHref,
      };
    }

    if (currentUrl.startsWith("/hu/blog/tag/")) {
      const param = currentUrl;
      englishHref = param.replace("/hu", "");
      hungaryHref = `/hu${param}`;
      return {
        englishHref,
        hungaryHref,
      };
    }

    if (currentUrl.startsWith("/hu/blog")) {
      const param = currentUrl.split("/hu/blog")[1].replaceAll("/", "");
      const prams = blog[decodeURIComponent(param.replaceAll("/", ""))];
      if (!prams) {
        hungaryHref = currentUrl;
        englishHref = "/blog/";

        return {
          englishHref,
          hungaryHref,
        };
      }
      const url = currentUrl.replace(param, prams).replace("hu/", "");
      hungaryHref = decodeURIComponent(currentUrl);
      englishHref = url;
      return {
        englishHref,
        hungaryHref,
      };
    }

    const param = currentUrl.split("/hu/")[1].replaceAll("/", "");
    const prams = links[decodeURIComponent(param)];
    if (!prams)
      return {
        hungaryHref: currentUrl,
        englishHref: "/",
      };
    const url = currentUrl.replace(param, prams).replace("/hu", "");
    englishHref = url;
    hungaryHref = currentUrl;
    return {
      englishHref,
      hungaryHref,
    };
  } else if (currentUrl.startsWith("/")) {
    if (currentUrl.startsWith("/blog/category/")) {
      const param = currentUrl.split("category")[1].replaceAll("/", "");
      const prams = categories[decodeURIComponent(param)];
      const url = currentUrl.replace(param, prams);
      englishHref = currentUrl;
      hungaryHref = `/hu${url}`;
      return {
        englishHref,
        hungaryHref,
      };
    }

    if (currentUrl.startsWith("/blog/tag/")) {
      const param = currentUrl;
      englishHref = param;
      hungaryHref = `/hu${param}`;
      return {
        englishHref,
        hungaryHref,
      };
    }

    if (currentUrl.startsWith("/blog")) {
      const param = currentUrl.split("/blog")[1];
      const prams = blog[param.replaceAll("/", "")];
      if (!prams) {
        hungaryHref = `/hu/blog/`;
        englishHref = currentUrl;
        return {
          englishHref,
          hungaryHref,
        };
      }
      const url = currentUrl.replace(param.replace("/", ""), prams);
      hungaryHref = `/hu${url}`;
      englishHref = currentUrl;
      return {
        englishHref,
        hungaryHref,
      };
    }

    const param = currentUrl.split("/")[1];
    const prams = links[param];
    if (!prams) {
      return {
        hungaryHref: `/hu/`,
        englishHref: "/",
      };
    }
    const url = currentUrl.replace(param, prams);
    hungaryHref = `/hu${url}`;
    englishHref = currentUrl;
    return {
      englishHref,
      hungaryHref,
    };
  } else {
    hungaryHref = `/hu/`;
    englishHref = `/`;
    return {
      englishHref,
      hungaryHref,
    };
  }
};

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
  return langCodeMatch ? langCodeMatch[1] : "en";
}
