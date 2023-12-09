import ProfileHeader from "../Profile/ProfileHeader";
import LayoutOffline from "./LayoutOffline";
import ProfileMenuOffline from "./ProfileMenuOffline";
import FloatingFooter from "./StickyFooter";
export default function ProfileOffline() {
  return (
    <>
      <ProfileHeader />
      <ProfileMenuOffline />
      <FloatingFooter />
    </>
  );
}
