import { Platform } from "react-native";
import { AdMobInterstitial } from "expo-ads-admob";

const adUnitBanner = Platform.select({
  ios: "",
  android: "",
});

const adUnitInter = Platform.select({
  ios: "",
  android: "",
});

const showInterAd = async () => {
  await AdMobInterstitial.setAdUnitID(adUnitInter);
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  await AdMobInterstitial.showAdAsync();
};

export { adUnitBanner, adUnitInter, showInterAd };
