type ConsentValue = "granted" | "denied";
type ContactType = "phone" | "whatsapp" | "email" | "form";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const consentStorageKey = "dda_google_consent";
const googleTagId = import.meta.env.VITE_GOOGLE_TAG_ID?.trim();
const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID?.trim();

const conversionLabels: Partial<Record<ContactType, string>> = {
  phone: import.meta.env.VITE_GOOGLE_ADS_PHONE_CONVERSION_LABEL?.trim(),
  whatsapp: import.meta.env.VITE_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL?.trim(),
  email: import.meta.env.VITE_GOOGLE_ADS_EMAIL_CONVERSION_LABEL?.trim(),
  form: import.meta.env.VITE_GOOGLE_ADS_FORM_CONVERSION_LABEL?.trim(),
};

const setupDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
};

const updateConsent = (value: ConsentValue) => {
  setupDataLayer();
  window.gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
};

export const loadGoogleTag = () => {
  if (!googleTagId || document.querySelector(`script[data-google-tag="${googleTagId}"]`)) return;

  setupDataLayer();
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleTagId)}`;
  script.dataset.googleTag = googleTagId;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", googleTagId, { send_page_view: true });
};

export const initializeGoogleConsent = () => {
  setupDataLayer();
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });

  if (localStorage.getItem(consentStorageKey) === "granted") {
    updateConsent("granted");
    loadGoogleTag();
  }
};

export const setGoogleConsent = (value: ConsentValue) => {
  localStorage.setItem(consentStorageKey, value);
  updateConsent(value);
  if (value === "granted") loadGoogleTag();
};

export const getGoogleConsent = () => localStorage.getItem(consentStorageKey) as ConsentValue | null;

export const trackContactConversion = (type: ContactType, placement: string) => {
  if (getGoogleConsent() !== "granted") return;

  setupDataLayer();
  window.gtag("event", "generate_lead", {
    lead_source: type,
    placement,
  });

  const label = conversionLabels[type];
  if (googleAdsId && label) {
    window.gtag("event", "conversion", {
      send_to: `${googleAdsId}/${label}`,
      value: 1,
      currency: "TRY",
    });
  }
};

