const revealTargets = document.querySelectorAll(".hero, .section, .stats-band");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealTargets.forEach((target) => revealObserver.observe(target));

const campaignButton = document.getElementById("campaign-button");
const campaignMessage = document.getElementById("campaign-message");

campaignButton?.addEventListener("click", () => {
  campaignMessage.textContent =
    "Thanks for showing up. Next step: publish this site on GitHub Pages and connect it to a petition, mailing list, or advocacy toolkit.";
});
