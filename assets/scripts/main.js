document.addEventListener("DOMContentLoaded", function () {
  // -------------------- SLIDERS --------------------

  // sale slider
const saleSlider = document.querySelector(".sale__slider");
if (saleSlider) {
  new Swiper(saleSlider, {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".sale-button-next",
      prevEl: ".sale-button-prev",
    },
    pagination: {
      el: ".sale-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      762: {
        slidesPerView: 2,
        grid: {
          rows: 1, 
        },
      },
    },
  });
}


  // offers slider
  const offersSlider = document.querySelector(".offers__slider");
  if (offersSlider) {
  new Swiper(offersSlider, {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".offers-button-next",
      prevEl: ".offers-button-prev",
    },
    pagination: {
      el: ".offers-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      762: {
        slidesPerView: 4,
        grid: {
          rows: 1, 
        },
      },
    },
  });
}
  // reviews slider
  const reviewsSlider = document.querySelector(".reviews__slider");
  if (reviewsSlider) {
    new Swiper(reviewsSlider, {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
      },
      pagination: {
        el: ".reviews-pagination",
        clickable: true,
      },
      breakpoints: {
        1400: {
          slidesPerView: 2,
        },
      },
    });
  }

  // workflow slider
  const workflowSlider = document.querySelector(".workflow__slider");
  if (workflowSlider) {
    new Swiper(workflowSlider, {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".workflow-button-next",
        prevEl: ".workflow-button-prev",
      },
      pagination: {
        el: ".workflow-pagination",
        clickable: true,
      },
    });
  }

  // -------------------- MOBILE MENU --------------------
  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".header__mobile");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.classList.toggle("lock");
    });
  }

  // -------------------- CATALOG SORT --------------------
  const sort = document.querySelector(".catalog__sort");
  if (sort) {
    const toggle = sort.querySelector(".catalog__sort__toggle");
    const list = sort.querySelector(".catalog__sort__list");
    const options = sort.querySelectorAll(".catalog__sort__option");

    if (toggle && list) {
      toggle.addEventListener("click", () => {
        list.classList.toggle("active");
        toggle.classList.toggle("is-active");
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          options.forEach((o) => o.classList.remove("is-active"));
          option.classList.add("is-active");
          list.classList.remove("active");
          toggle.classList.remove("is-active");
          console.log("Selected:", option.dataset.value);
        });
      });

      document.addEventListener("click", (e) => {
        if (!sort.contains(e.target)) {
          list.classList.remove("active");
          toggle.classList.remove("is-active");
        }
      });
    }
  }

  // -------------------- FILTERS POPUP --------------------
  const popupTrigger = document.querySelector(".catalog__filters-btn--popup");
  const filtersPopup = document.getElementById("filtersPopup");
  if (popupTrigger && filtersPopup) {
    const closeBtn = filtersPopup.querySelector(
      ".catalog__filters-popup__close"
    );
    const clearBtn = filtersPopup.querySelector(".popup-filters__clear");
    const applyBtn = filtersPopup.querySelector(".popup-filters__apply");

    popupTrigger.addEventListener("click", () => {
      filtersPopup.classList.add("active");
    });

    closeBtn?.addEventListener("click", () => {
      filtersPopup.classList.remove("active");
    });

    filtersPopup.querySelectorAll(".popup-filters__toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("is-active");
        btn.nextElementSibling?.classList.toggle("active");
      });
    });

    filtersPopup
      .querySelectorAll(".popup-filters__option")
      .forEach((option) => {
        option.addEventListener("click", () => {
          const group = option.closest(".popup-filters__group");
          if (!group) return;
          const toggle = group.querySelector(".popup-filters__toggle");
          const label = group.querySelector(".popup-filters__label");
          if (toggle && label) {
            label.textContent = option.textContent;
            group
              .querySelectorAll(".popup-filters__option")
              .forEach((o) => o.classList.remove("is-active"));
            option.classList.add("is-active");
            toggle.classList.remove("is-active");
            group
              .querySelector(".popup-filters__list")
              ?.classList.remove("active");
          }
        });
      });

    clearBtn?.addEventListener("click", () => {
      filtersPopup
        .querySelectorAll(".popup-filters__option")
        .forEach((o) => o.classList.remove("is-active"));
      filtersPopup
        .querySelectorAll(".popup-filters__label")
        .forEach((l) => (l.textContent = ""));
    });

    // see results
    applyBtn?.addEventListener("click", () => {
      const selected = [];
      filtersPopup
        .querySelectorAll(".popup-filters__option.is-active")
        .forEach((o) => selected.push(o.textContent));
      console.log("Selected filters:", selected);
      filtersPopup.classList.remove("active");
    });
  }

  // -------------------- PRODUCT PAGE VARIATIONS --------------------
  const categoryButtons = document.querySelectorAll(
    ".product-page__variation-list .product-page__variation-button"
  );
  if (categoryButtons.length) {
    categoryButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });
  }

  const variationSelect = document.querySelector(
    ".product-page__variation-select"
  );
  if (variationSelect) {
    const variationToggle = variationSelect.querySelector(
      ".product-page__variation-toggle"
    );
    const variationCurrent = variationSelect.querySelector(
      ".product-page__variation-current"
    );
    const variationDropdown = variationSelect.querySelector(
      ".product-page__variation-dropdown"
    );
    const variationOptions =
      variationDropdown?.querySelectorAll(".product-page__variation-option") ||
      [];

    if (variationToggle && variationCurrent && variationDropdown) {
      variationToggle.addEventListener("click", () => {
        variationDropdown.classList.toggle("active");
        variationToggle.classList.toggle("is-active");
      });

      variationOptions.forEach((option) => {
        option.addEventListener("click", () => {
          variationOptions.forEach((o) => o.classList.remove("is-active"));
          option.classList.add("is-active");
          variationCurrent.textContent = option.textContent;
          variationDropdown.classList.remove("active");
          variationToggle.classList.remove("is-active");
        });
      });

      document.addEventListener("click", (e) => {
        if (!variationSelect.contains(e.target)) {
          variationDropdown.classList.remove("active");
          variationToggle.classList.remove("is-active");
        }
      });
    }
  }

  const quantityForm = document.querySelector(".product-page__quantity-form");

  if (quantityForm) {
    const minusBtn = quantityForm.querySelector("button:first-child");
    const plusBtn = quantityForm.querySelector("button:last-child");
    const valueEl = quantityForm.querySelector("span");

    let value = parseInt(valueEl.textContent, 10) || 0;

    minusBtn.addEventListener("click", () => {
      if (value > 0) {
        value--;
        valueEl.textContent = value;
      }
    });

    plusBtn.addEventListener("click", () => {
      value++;
      valueEl.textContent = value;
    });
  }

  // -------------------- PRODUCT REQUEST POPUP --------------------
  const buyBtns = document.querySelectorAll(".product-page__buy-btn");
  const palletPopup = document.getElementById("popupPallet");

  if (buyBtns.length && palletPopup) {
    const closeBtn = palletPopup.querySelector(".popup-pallet__close");
    const okBtn = palletPopup.querySelector(".popup-pallet__ok");

    buyBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        palletPopup.classList.add("active");
      });
    });

    const closePopup = () => {
      palletPopup.classList.remove("active");
    };

    closeBtn?.addEventListener("click", closePopup);
    okBtn?.addEventListener("click", closePopup);

    palletPopup.addEventListener("click", (e) => {
      if (e.target === palletPopup) closePopup();
    });
  }
  // -------------------- FAQ TABS --------------------
  const faqTabs = document.querySelectorAll(".faq__tab");
  const faqItems = document.querySelectorAll(".faq__container");

  if (faqTabs.length && faqItems.length) {
    faqTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        faqTabs.forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");

        const category = tab.dataset.category;

        faqItems.forEach((item) => {
          if (category === "all" || item.dataset.category === category) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  // -------------------- DISCOUNT CODE --------------------
  const discountForm = document.querySelector(".form-discount");
  if (discountForm) {
    const input = discountForm.querySelector("input");
    const button = discountForm.querySelector("button");

    discountForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (input.value.trim() !== "") {
        button.classList.add("is-active");
      } else {
        button.classList.remove("is-active");
      }
    });
  }

  // -------------------- SHOP TAB SELECT --------------------
  const shopSelectWraps = document.querySelectorAll(".shop__tab-select-wrap");

  shopSelectWraps.forEach((wrap) => {
    const toggle = wrap.querySelector(".shop__tab-toggle");
    const current = wrap.querySelector(".shop__tab-current");
    const dropdown = wrap.querySelector(".shop__tab-dropdown");
    const icon = wrap.querySelector(".shop__tab-icon");
    const options = dropdown
      ? dropdown.querySelectorAll(".shop__tab-option")
      : [];

    if (!toggle || !dropdown) return;

    const initial = dropdown.querySelector(".shop__tab-option.is-active");
    if (initial && current) current.innerHTML = initial.innerHTML.trim();

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("active");
      toggle.classList.toggle("is-active");
      if (icon) icon.classList.toggle("is-active");
    });

    options.forEach((opt) => {
      opt.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        options.forEach((o) => o.classList.remove("is-active"));
        opt.classList.add("is-active");

        if (current) current.innerHTML = opt.innerHTML.trim();

        dropdown.classList.remove("active");
        toggle.classList.remove("is-active");
        if (icon) icon.classList.remove("is-active");
      });
    });

    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) {
        dropdown.classList.remove("active");
        toggle.classList.remove("is-active");
        if (icon) icon.classList.remove("is-active");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        dropdown.classList.remove("active");
        toggle.classList.remove("is-active");
        if (icon) icon.classList.remove("is-active");
      }
    });
  });

  // -------------------- CHECKOUT TABS --------------------
  const deliveryTab = document.querySelector(".shop__tab:first-child");
  const paymentTab = document.querySelector(".shop__tab:nth-child(2)");
  const placeOrderBtn = document.querySelector(".cart__summary-button a");

  if (deliveryTab && paymentTab && placeOrderBtn) {
    const confirmBtn = deliveryTab.querySelector(".shop__tab-button button");
    const formInputs = deliveryTab.querySelectorAll(".shop__form-input");
    const deliveryRadios = deliveryTab.querySelectorAll(
      "input[name='delivery']"
    );
    const formBlock = deliveryTab.querySelector(".shop__form");
    const controlsBlock = deliveryTab.querySelector(".shop__controls");
    const countrySelect = deliveryTab.querySelector(".shop__tab-select");
    const billingRadio = deliveryTab.querySelector("#billingDelivery");
    const paymentRadios = paymentTab.querySelectorAll("input[type='radio']");

    placeOrderBtn.classList.add("disable");

    // -------------------- COPY DELIVERY TO BILLING --------------------
    billingRadio.addEventListener("change", () => {
      if (!billingRadio.checked) return;

      const deliveryFields = deliveryTab.querySelectorAll(
        ".shop__form-row:nth-child(1) .shop__form-wrap input[data-key], " +
          ".shop__form-row:nth-child(2) .shop__form-wrap input[data-key]"
      );
      const billingFields = deliveryTab.querySelectorAll(
        ".shop__form-row:last-child .shop__form-wrap input[data-key]"
      );

      const map = {};
      deliveryFields.forEach((input) => (map[input.dataset.key] = input.value));
      billingFields.forEach((input) => {
        if (map[input.dataset.key] !== undefined)
          input.value = map[input.dataset.key];
      });
    });

    // -------------------- CONFIRM BUTTON --------------------
    confirmBtn.addEventListener("click", (e) => {
      e.preventDefault();
      deliveryTab.querySelectorAll(".error-text").forEach((el) => el.remove());
      let valid = true;

      formInputs.forEach((input) => {
        const fieldWrap =
          input.closest(".shop__form-field") || input.parentElement;
        fieldWrap.querySelectorAll(".error-text").forEach((el) => el.remove());
        if (input.placeholder.includes("*") && input.value.trim() === "") {
          const error = document.createElement("div");
          error.className = "error-text";
          error.textContent = "* — This field is required.";
          fieldWrap.appendChild(error);
          valid = false;
        }
      });

      const selectedDelivery = Array.from(deliveryRadios).find(
        (r) => r.checked
      );
      if (!selectedDelivery) {
        const error = document.createElement("div");
        error.className = "error-text";
        error.textContent = "* — Select delivery option.";
        controlsBlock.insertAdjacentElement("beforeend", error);
        valid = false;
      }

      if (!valid) return;

      const getVal = (key) =>
        deliveryTab.querySelector(`input[data-key="${key}"]`)?.value.trim() ||
        "";

      const email = getVal("email");
      const phone = getVal("phone");
      const firstName = getVal("firstName");
      const lastName = getVal("lastName");
      const street = getVal("street");
      const apartment = getVal("apartment");
      const zip = getVal("zip");
      const city = getVal("city");
      const company = getVal("company");

      const countryEl = countrySelect?.querySelector(".shop__tab-current");
      let country = "";
      if (countryEl) {
        const clone = countryEl.cloneNode(true);
        clone.querySelectorAll("span").forEach((s) => s.remove());
        country = clone.textContent.trim();
      }

      let deliveryLogo = "";
      let deliveryText = "";
      if (selectedDelivery) {
        const label = deliveryTab.querySelector(
          `label[for="${selectedDelivery.id}"]`
        );
        deliveryLogo = label.querySelector("img")?.outerHTML || "";
        deliveryText =
          label.querySelector(".shop__controls-label")?.textContent.trim() ||
          "";
      }

      formBlock.style.display = "none";
      controlsBlock.style.display = "none";
      if (countrySelect) countrySelect.style.display = "none";
      confirmBtn.style.display = "none";

      const summary = document.createElement("div");
      summary.className = "shop__tab-summary";
      summary.style.display = "flex";
      summary.style.justifyContent = "space-between";

      const billingMatchesDelivery = billingRadio.checked;

      summary.innerHTML = `
      <div class="summary-left">
        <div class="summary-delivery">
          ${deliveryLogo}<span>${deliveryText}</span>
        </div>
        <div class="summary-details">
          <span>${email}</span>
          <span>${phone}</span>
          <span>${firstName} ${lastName}</span>
          <span>${street} ${apartment}</span>
          <span>${zip} ${city}</span>
          <span>${company}</span>
          <span>${country}</span>
        </div>
        ${
          billingMatchesDelivery
            ? `<div class="billing-same-text">The billing address is the same as the delivery address.</div>`
            : ""
        }
      </div>
      <div class="summary-right">
        <div class="summary-change">
          <button class="change-btn">Change</button>
        </div>
      </div>
    `;

      deliveryTab.appendChild(summary);

      paymentTab.querySelector(".shop__tab-hide").style.display = "none";
      paymentTab.querySelector(".shop__tab-container").style.display = "block";

      // -------------------- ENABLE PLACE ORDER --------------------
      const checkEnablePlaceOrder = () => {
        const paymentSelected = Array.from(paymentRadios).some(
          (r) => r.checked
        );
        if (valid && paymentSelected) {
          placeOrderBtn.classList.remove("disable");
        } else {
          placeOrderBtn.classList.add("disable");
        }
      };

      paymentRadios.forEach((radio) =>
        radio.addEventListener("change", checkEnablePlaceOrder)
      );

      checkEnablePlaceOrder();

      summary.querySelector(".change-btn").addEventListener("click", () => {
        summary.remove();
        formBlock.style.display = "";
        controlsBlock.style.display = "";
        if (countrySelect) countrySelect.style.display = "";
        confirmBtn.style.display = "";
        paymentTab.querySelector(".shop__tab-hide").style.display = "";
        paymentTab.querySelector(".shop__tab-container").style.display = "none";
        placeOrderBtn.classList.add("disable");
      });
    });
  }

  // -------------------- COOKIE MODAL --------------------
  const cookieModal = document.querySelector(".cookie__modal");
  if (cookieModal) {
    const customizeBtn = cookieModal.querySelector(".cookie__btn-customize");
    const declineBtn = cookieModal.querySelector(".cookie__btn-decline");
    const acceptBtn = cookieModal.querySelector(".cookie__btn-accept");
    const saveBtn = cookieModal.querySelector(".cookie__btn-save");
    const settings = cookieModal.querySelector(".cookie__settings");

    const closeModal = () => {
      cookieModal.classList.remove("active");
    };

    declineBtn.addEventListener("click", closeModal);
    acceptBtn.addEventListener("click", closeModal);
    saveBtn.addEventListener("click", closeModal);

    customizeBtn.addEventListener("click", () => {
      customizeBtn.classList.add("hidden");
      acceptBtn.classList.add("hidden");
      settings.classList.add("active");
      saveBtn.classList.add("active");
    });

    const tabs = cookieModal.querySelectorAll(".cookie__tab");
    tabs.forEach((tab) => {
      const header = tab.querySelector(".cookie__tab-header");
      header.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
      });
    });
  }

  // -------------------- LANG MODAL --------------------
  const langModal = document.querySelector(".lang__modal");
  if (langModal) {
    const saveBtn = langModal.querySelector(".lang__modal-save");
    const closeBtn = langModal.querySelector(".lang__modal-close");
    const tabs = langModal.querySelectorAll(".lang__tab");

    let blurOverlay = document.querySelector(".blur-overlay");
    if (!blurOverlay) {
      blurOverlay = document.createElement("div");
      blurOverlay.classList.add("blur-overlay");
      document.body.appendChild(blurOverlay);
    }

    const openModal = () => {
      langModal.classList.add("active");
      blurOverlay.classList.add("active");
    };

    const closeModal = () => {
      langModal.classList.remove("active");
      blurOverlay.classList.remove("active");
    };

    closeBtn.addEventListener("click", closeModal);
    saveBtn.addEventListener("click", closeModal);
    blurOverlay.addEventListener("click", closeModal);

    tabs.forEach((tab) => {
      const header = tab.querySelector(".lang__tab-header");
      const options = tab.querySelectorAll(".lang__modal-option");

      header.addEventListener("click", () => {
        tabs.forEach((t) => t !== tab && t.classList.remove("active"));
        tab.classList.toggle("active");
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          const select = tab.querySelector(".lang__modal-select");
          select.innerHTML = option.innerHTML;
          tab.classList.remove("active");
          saveBtn.classList.add("active");
        });
      });
    });

    document.querySelectorAll(".open-lang-popup").forEach((btn) => {
      btn.addEventListener("click", openModal);
    });
  }

  // -------------------- SEARCH MODAL --------------------
  const searchModal = document.querySelector(".search__modal");
  if (searchModal) {
    const container = searchModal.querySelector(".search__modal-container");
    const input = searchModal.querySelector(".search__modal-field input");
    const closeIcon = searchModal.querySelector(".search__modal-field img");
    const goBtn = searchModal.querySelector(".search__modal-button");

    let blurOverlay = document.querySelector(".blur-overlay");
    if (!blurOverlay) {
      blurOverlay = document.createElement("div");
      blurOverlay.classList.add("blur-overlay");
      document.body.appendChild(blurOverlay);
    }

    const openModal = () => {
      searchModal.classList.add("active");
      blurOverlay.classList.add("active");
      input.focus();
    };

    const closeModal = () => {
      searchModal.classList.remove("active");
      blurOverlay.classList.remove("active");
      input.value = "";
      closeIcon.classList.remove("active");
    };

    blurOverlay.addEventListener("click", closeModal);
    closeIcon.addEventListener("click", () => {
      input.value = "";
      closeIcon.classList.remove("active");
      input.focus();
    });

    input.addEventListener("input", () => {
      if (input.value.trim().length > 0) {
        closeIcon.classList.add("active");
      } else {
        closeIcon.classList.remove("active");
      }
    });

    goBtn.addEventListener("click", closeModal);

    document.querySelectorAll(".open-search-modal").forEach((btn) => {
      btn.addEventListener("click", openModal);
    });
  }

  // -------------------- ERROR EYES --------------------
const leftEye = document.querySelector(".left-eye")
const rightEye = document.querySelector(".right-eye")

if (leftEye && rightEye) {
  const leftCenter = { x: +leftEye.getAttribute("cx"), y: +leftEye.getAttribute("cy") }
  const rightCenter = { x: +rightEye.getAttribute("cx"), y: +rightEye.getAttribute("cy") }
  const radius = 10

  document.addEventListener("mousemove", e => {
    const { clientX, clientY } = e

    moveEye(leftEye, leftCenter, clientX, clientY)
    moveEye(rightEye, rightCenter, clientX, clientY)
  })

  function moveEye(eye, center, mouseX, mouseY) {
    const dx = mouseX - center.x
    const dy = mouseY - center.y
    const angle = Math.atan2(dy, dx)

    const newX = center.x + Math.cos(angle) * radius
    const newY = center.y + Math.sin(angle) * radius

    eye.setAttribute("cx", newX)
    eye.setAttribute("cy", newY)
  }
}


  // -------------------- END --------------------
});
