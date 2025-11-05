---
title: Support
description: Get help and support the project.
layout: page
isWide: true
section: support
bodyClass: with-grid
---

Quiet UI is available under the terms of the [MIT License](https://github.com/quietui/quiet/blob/main/LICENSE). For community support, please visit the [public forum](https://github.com/quietui/quiet/discussions).

<div class="pricing-tiers-triple">
  <div class="pricing-tier">
    <quiet-icon class="pricing-tier-icon" name="code" style="color: #7db664;"></quiet-icon>
    <h3 data-no-anchor>Developer</h3><br>
    <ul>
      <li><quiet-icon name="code" style="color: #f0803a;"></quiet-icon> View the code</li>
      <li><quiet-icon name="tool" style="color: #848da1;"></quiet-icon> Modify the code</li>
      <li><quiet-icon name="users-group" style="color: #20b9bd;"></quiet-icon> Community support</li>
      <li><quiet-icon name="x" style="color: #b91c1c;"></quiet-icon> <s>Help from the maintainer</s></li>
      <li><quiet-icon name="x" style="color: #b91c1c;"></quiet-icon> <s>Priority bug fixes</s></li>
    </ul>
    <quiet-button pill href="https://github.com/quietui/quiet" target="_blank">
      <quiet-icon slot="start" name="brand-github"></quiet-icon>
      Get the code
    </quiet-button>
  </div>

  <div class="pricing-tier with-ribbon">
    <quiet-icon class="pricing-tier-icon" name="heart-handshake" style="color: deeppink;"></quiet-icon>
    <h3 data-no-anchor>Sponsor</h3><br>
    <ul>
      <li><quiet-icon name="check" style="color: #7db664;"></quiet-icon> Sponsors badge</li>
      <li><quiet-icon name="check" style="color: #7db664;"></quiet-icon> Help from the maintainer</li>
      <li><quiet-icon name="check" style="color: #7db664;"></quiet-icon> Priority bug fixes</li>
      <li><quiet-icon name="check" style="color: #7db664;"></quiet-icon> Fast response times</li>
      <li><quiet-icon name="check" style="color: #7db664;"></quiet-icon> Support development</li>
    </ul>
    <quiet-button variant="primary" pill href="https://github.com/sponsors/quietui">
      Sponsor on GitHub
    </quiet-button>
    <div class="ribbon">THANK YOU</div>
  </div>  
  
  <div class="pricing-tier">
    <quiet-icon class="pricing-tier-icon" name="comet" style="color: #e89c25;"></quiet-icon>
    <h3 data-no-anchor>Stargazer</h3><br>
    <ul>
      <li><quiet-icon name="click" style="color: #4b97f4;"></quiet-icon> Just a click</li>
      <li><quiet-icon name="ban" style="color: #48b873;"></quiet-icon> Costs nothing</li>
      <li><quiet-icon name="yin-yang" style="color: #ef6383;"></quiet-icon> Good karma</li>
      <li><quiet-icon name="telescope" style="color: #e89b25;"></quiet-icon> Raises awareness</li>
      <li><quiet-icon name="cat" style="color: #848da1;"></quiet-icon> Makes the cats happy</li>
    </ul>
    <quiet-button pill href="https://github.com/quietui/quiet/stargazers" target="_blank">
      <quiet-icon slot="start" name="star"></quiet-icon>
      Star on GitHub
    </quiet-button>
  </div>
</div>

<ul class="features-grid" aria-label="Features">
  <li>
    <quiet-icon name="brand-open-source" style="color: #4b97f4;"></quiet-icon><br>
      Open source<br>
    <small>Available under the MIT License</small>
  </li>
  <li>
    <quiet-icon name="geometry" style="color: #b394f4;"></quiet-icon><br>
      Professionally designed<br>
    <small>Easy to use, bulletproof components</small>
  </li>
  <li>
    <quiet-icon name="plug" style="color: #848da0;"></quiet-icon><br>
    Works with every framework<br>
    <small>Take it with you no matter the stack</small>
  </li>
  <li>
    <quiet-icon name="school" style="color: #7db664;"></quiet-icon><br>
    Learn once, use everywhere<br>
    <small>Built to survive framework churn</small>
  </li>
  <li>
    <quiet-icon name="tools" style="color: #e89b25;"></quiet-icon><br>
    Actively maintained &amp; evolving<br>
    <small>Regular updates keep you on the cutting edge</small>
  </li>
  <li>
    <quiet-icon name="lock-heart" style="color: #e886a7;"></quiet-icon><br>
    Zero tracking, zero ads<br>
    <small>Clean, focused development without distractions</small>
  </li>
</ul>

<p style="text-align: center; text-wrap: balance; margin-block: 2.5rem 2rem;">
  <small>
    Quiet UI is an open source project. Consider <a href="https://github.com/sponsors/quietui" target="_blank">supporting the project</a> with a one-time or recurring sponsorship.
  </small>
</p>

<img class="whiskers-center" src="/assets/images/whiskers/with-heart.svg" alt="Whiskers the mouse holding a giant heart">

<div 
  style="
    display: flex; 
    gap: 1rem; 
    justify-content: center; 
    margin-block: 2.5rem 2rem;
  "
>
  <quiet-button variant="primary" size="lg" pill href="https://github.com/sponsors/quietui">
    Sponsor on GitHub
  </quiet-button>
</div>

---

## Frequently asked questions

:::details How can I report a bug? {.faq}
Bugs should be [reported on GitHub](https://github.com/quietui/quiet/issues). For best results, please include a minimal reproduction with your report.
:::

:::details When will my bug be fixed? {.faq}
I prioritize bug fixes that affect Insiders. I try to submit fixes quickly, but some bugs are tricky and require more time, research, etc. I will communicate my progress so you're always aware of what's happening.
:::

:::details How can I request a feature? {.faq}
Features can be [requested on GitHub](https://github.com/quietui/quiet/discussions/categories/feature-requests). Please search before posting to prevent duplicate requests and use the 👍 reaction to vote.
:::

:::details Can I sponsor a feature? {.faq}
I generally don't accept sponsorships for specific features. This lets me focus on what's best for the project. Quiet is the result of many years of experience and my commitment to painstakingly curating the project. I want people to sponsor it because they see the vision, not because they want to change it.
:::

:::details What about server-side rendering (SSR)? {.faq}
_Framework SSR_ was created to solve problems introduced by client-side frameworks. When we moved to rendering everything with JavaScript, we broke SEO, social media previews, and page load performance. While framework SSR can be helpful in some scenarios, it's often misused to justify shipping massive JavaScript bundles that leave pages looking ready but completely unresponsive until everything loads and hydration completes.

The idea behind framework SSR is that fetching and hydrating can be done in the background before the user is likely to interact with the page. As such, it first sends the user a "fully painted" picture they can't actually do anything with while waiting for the browser to download and process a multi-megabyte bundle. However, it's become common to see 5+ seconds until [TTI](https://developer.chrome.com/docs/lighthouse/performance/interactive) in the wild, leaving many users confused and frustrated.

Quiet isn't interested in supporting the framework SSR fallacy. As part of the platform, web components can be server-side rendered like all other HTML elements have since the early days of the Web. Just generate the appropriate HTML tags, import the components, and you're good to go.

If you're using Quiet's autoloader, it will efficiently fetch only the components you're using on the page. And to eliminate [FOUCE](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements), the most common reason people reach for SSR when using web components, Quiet provides some [simple and effective tools](/docs/#reducing-fouce).

The key to a great experience on the web isn't SSR, it's less JavaScript. If you're of the belief that you need framework SSR and all the needless complexity it brings to a project, this library isn't for you.
:::

:::details Can I change the tag names? {.faq}
Component tag names, e.g. `<quiet-button>`, cannot be changed without modifying the source code due to the way tags are referenced in code and styles. Attempting to change tag names, e.g. by extending the associated classes, will cause unexpected breakages and isn't a supported feature of the library.
:::

:::details Can I subclass the components? {.faq}
While components are written as classes, they aren't designed to be subclassed. This is neither supported nor an objective of the library and doing so will cause things to break. Instead, use composition when possible.
:::

:::details Can I use this library with a micro frontend? {.faq}
Because custom elements are registered globally, I don't recommend using Quiet in a micro frontend architecture _unless_ you move it to the top of the stack. Avoid loading the library multiple times, as this will cause version conflicts and load more code than is necessary.
:::

<small class="copyright">
  Quiet UI is a project of A&nbsp;Beautiful&nbsp;Site,&nbsp;LLC
  &copy;<quiet-date year="numeric"></quiet-date>
</small>
