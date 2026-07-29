const menuData = {
  coffee: {
    title: "ブレンドコーヒー",
    description: "深みのあるコクと豊かな香りをお楽しみいただけます。",
    price: "500円",
    image: "img/Gemini_Generated_Image_coapqncoapqncoap.png"
  },
  dessert: {
    title: "フルーツタルト",
    description: "サクサクのタルト生地に、カスタードと旬のフルーツを盛り付けました。",
    price: "950円",
    image: "img/Gemini_Generated_Image_b4rvl4b4rvl4b4rv.png"
  },
  pancake: {
    title: "焼き立てパンケーキ",
    description: "バターとメープルシロップを添えた、ふんわり甘いパンケーキです。",
    price: "1100円",
    image: "img/Gemini_Generated_Image_wof5dbwof5dbwof5.png"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('menu-modal');
  const closeBtn = document.getElementById('close-btn');
  const modalImg = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalAllergy = document.getElementById('modal-allergy');
  const modalPrice = document.getElementById('modal-price');

  document.querySelectorAll('.coffee').forEach(img => {
    img.addEventListener('click', () => {
    const id = img.getAttribute('data-id');
    const data = menuData[id];

    if (data) {
    modalImg.src = data.image;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    modalAllergy.textContent = data.allergy;
    modalPrice.textContent = data.price;
    modal.style.display = 'flex';
    }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});

document.getElementById("send-data").onclick = function () {
        const surname = document.getElementById("lastname").value;
        const firstname = document.getElementById("firstname").value;
        document.getElementById("display-surname").innerText = surname
        document.getElementById("display-firstname").innerText = firstname
        }