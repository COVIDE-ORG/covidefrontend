import { React } from "react";
import "./tabs.css";



const Homecard = () => {
  const volunteerTeam = [
    {
      name: "Rohit Jaiswal",
      society: "MSAC",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1ml0bwSxf0zT5LKnE04qOaJYI4VgEIUjJ"
    },
    {
      name: "Sakshi Sinha",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1mHuRTuwABTBe4eKt6xb482YpmHSsc3Z-"
    },
    {
      name: "Mayank Kishor",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1UozfBzJg4VwLzoWtdMI1YN7PMkSnNJSu"
    },
    {
      name: "Kushan Sen Gupta",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1b28oW3ujTHeTpBHK8ZhXu0y02Wek5K6F"
    },
    {
      name: "Abhinit Kumar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=10woXAhcd39HAaTveiz2h6JuBZp3nX97t"
    },
    {
      name: "Rohan Singha",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1TMhlw9BIPjNtkI11AeBoPPOYXD1l_jV1"
    },
    {
      name: "Sayan Basu",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1APvBCAAWmAaWaWipMapnTKCJElzRAg25"
    },
    {
      name: "Rohan Ganguly",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1b1GviU_F03LXHIsbJ9ylBiMlLKAheSqH"
    },
    {
      name: "Subhasmita Nayak",
      society: "TPH ",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1DPvz1sDrmdiAeVpx_fUu35HwauVvhCS6"
    },
    {
      name: "Deeksha Lakhotia",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=17ziUgpg3tLtVEl966uhBkZZloBmT8rgE"
    },
    {
      name: "Harsh Raj",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=15vLQB7FZbf2CGNMbdMEcDpHPHWnyjWUB"
    },
    {
      name: "Prachee Chandrakar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1__CCeZM9fB1su6FBLBoMZoumpdPmbL58"
    },
    {
      name: "Abhinav Kumar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1_wo8kf8J_G1QJZsIdl8hW05iwBGv9QH-"
    },
    {
      name: "Nilabhro Roy",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1dDGPE_AmBuSvCy85yFJ-GND1y2CptiYN"
    },
    {
      name: "Rocky Kumar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1QrgxHy-6fdG77I0UvjVBXCexvq46q5Lc"
    },
    {
      name: "Avani Srivastava ",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1Ei_xoNcdH6q6Ljz-KWHW6T7vBZO9fKw6"
    },
    {
      name: "Muskan Agrawal",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1VLuZekwr7X6KlJ0bRph8ZZqEud4ZRu66"
    },
    {
      name: "Oishi Saha",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=16KVPH1eVgvqTqYdHhM_yTIdHyg2OK95j"
    },
    {
      name: "Priya Pallavi",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=10NWYKp09MlsIrGvXL6L93PaTnjuwDFt5"
    },
    {
      name: "Katyani",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1cmhM0FTgc_Ye_rH5Q5m_OeIs0AylWiMk"
    },
    {
      name: "Neha Mondal",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1h_ImOK4EKJEEEh14dTXWjUjQ1V94p3Yn"
    },
    {
      name: "Anuradha Mondal",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1ccn9eDaeYBWR2iAufR2pII2LFoB8s2M2"
    },
    {
      name: "Vanshita Sinha ",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1fhqzVSiWkJi3U7Jv0fNTMfVJT3zhlNpS"
    },
    {
      name: "Rachita Srivastava ",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=15hiY9kC0ZetfxkgLQviIiOvKr4D7VgAG"
    },
    {
      name: "Eshita Bhattacharyya ",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=14rGZtdcAfi1PqAOEp9L3o9cteoAkb5ma"
    },
    {
      name: "Bismit Pattnaik",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1pIgWFa5s5iNmGM9V2kgFJNjZOblN5TcM"
    },
    {
      name: "Juhi Kumari",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1xc75oM8fazxqaStkZ1lT3H6i1Iok3eQ4"
    },
    {
      name: "Sayantan Mitra",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1Jpg2fuPj1Z1SWzz_ptt7668KeWfgv94G"
    },
    {
      name: "Ruma Raj",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1-uO_lFgTaEEtDQI6LVCuCi8ZJ4XBJ1fI"
    },
    {
      name: "Nitya Jain",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1mxGrnGGZTNy9omF2enBJs5ru2Vk8Amnm"
    },
    {
      name: "Prashoon Chandrakar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=117RKuDyrMaS4IIijYCmsAxFZR_NaS4sg"
    },
    {
      name: "Anoksha Das",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=19PGysaZsaYngZs3IiXg8JGYL94XpYsJF"
    },
    {
      name: "Shweta Smriti Tripathi",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1YSRdb87z2yRTFjWg5mxrOsoJaoiWmCdd"
    },
    {
      name: "Tanishka Anand",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1pr2ha0Cm1eWUP_3wiGTf4bp1FBmrsU-h"
    },
    {
      name: "Neha Bhagat",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1SkoKJArWDN2iaFF5d5mjDNnvcna-mVLU"
    },
    {
      name: "Abhinav Karthikeya",
      society: "Desire Foundation",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1QiH6KT6LYVQg8c8wDQ_cCTTGkAtJtd5W"
    },
    {
      name: "Sharanya Pattnaik",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1EJ5M5ajryzlhnnN0yGXGRfjQiOp5y3Ok"
    },
    {
      name: "Kumar Aryan",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1gNHEmuPGEhcC0T_H2YDUBqoy8tZoeKy8"
    },
    {
      name: "Kaushiki Adhikary",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1qgBhvt88FfXtUmD9H58lKVBRMgyOcQq5"
    },
    {
      name: "Raunak Jahan",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1FMI_Ne7FzX6iP22AT55Z9JB9yj3ZQxh3"
    },
    {
      name: "Prakhar Singh",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=140DdnexG9C2c2Ynw4zSPIG4vZ7mO39Hs"
    },
    {
      name: "Tipika Naik",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1WYWv1x49Nk3QNyD3y4AZlyGGWn1sEPDV"
    },
    {
      name: "Ankita Rout",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1Gvw96015iiuQM_7Hndz8PY4KIW155ami"
    },
    {
      name: "Rojalin Biswal",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=10TOmQumy9fN3usy3rI88xJDh4J3H7Iy7"
    },
    {
      name: "Ankush Chakravarty",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=128yBFg2grtiUdwDi6bfSDQDhzHx-MS5G"
    },
    {
      name: "Shubham Raj",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1BRgDR8qmpNJyUHD7OURk6rqSZkpMH89r"
    },
    {
      name: "Riya Agarwal",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=16Fx4ji5K_jHpPbR51wXtE_-J9fBD8Js9"
    },
    {
      name: "Archita Ganguly",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1k70WO-TqSvN2Kyx7wnu9aM7s4p1PWLmW"
    },
    {
      name: "Vineeta Shankar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=15c8iUtNmxd3d6IeZgbBPLkWHi43XPmNv"
    },
    {
      name: "Nipurn Nagar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1_iAEZrWYXEWqN-Klbw8edzII1sYpq_x2"
    },
    {
      name: "Priyanka Dutta",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1jvuf2vn3jn54Ja7abfGiFUjAMcSDuEGS"
    },
    {
      name: "Kairavi",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1po2UX5wI8gFK9lCXAiTqlWrIO_DaY2j9"
    },
    {
      name: "Sunidhi Srivastava",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1Gs4CihFXN6ZBQJ77dsOKTGCMCShwoum2"
    },
    {
      name: "Abhranil Manna",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1iwe65PVDJN1Lzy00Jt1MwvWkWHrSclWY"
    },
    {
      name: "Smriti Priya Shah",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1leHInoO9bMAEOMgY3jVVi4NoT5ISGUqT"
    },
    {
      name: "Aniket Gope ",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1y6N10I8Hv5CILEHzrMG-f-fqAcpDgtEJ"
    },
    {
      name: "Prakhar Yadav",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=12tXwHFa_A0VZsMYroV2PzCRslGoR1Ugx"
    },
    {
      name: "Rachit Verma",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=12aYCW2OWo-aTv3f3eg5Bob5fnmYq3rm1"
    },
    {
      name: "Shatabdi Panda",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1bh9UP3P1bc_ssDrX19_gSUJ4dS1VtXFU"
    },
    {
      name: "Jyotirmoy Mandal",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1lmyHne37UqG8Pc817tcp4awOY-4xGdDa"
    },
    {
      name: "Anindita Deb Goswami",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1aDOSwHEMFbSGUEqWYEYB2KAeo9zlZTsR"
    },
    {
      name: "Ritaja Rahman",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1pqvgcaNjtwwBTMGBCtKU_bhj_1f7CTax"
    },
    {
      name: "Payal Priyadarshani",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1FPtuL2v98RlhZ79uSt1adXiC96JsOJjk"
    },
    {
      name: "Shreyaa Bharty ",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1zi_ryyEfKhgXIwm_c1r8zMmB_ZRxuPVT"
    },
    {
      name: "Ritika Sinha",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1SxCTDvrvJKDhVEFaxcZEbE8c5PtilKJn"
    },
    {
      name: "Yash Srivastava",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1BYpM5tZSXhBr6x7EvZSksDspvbbMZdho"
    },
    {
      name: "Aarati Goenka",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1zvPhHfydfGBFLOD8uaREnYCHlOwXP5qw"
    },
    {
      name: "Siddhartha Snehil ",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1nGdNTOIoWpRWiaVdLMGuFwczcRq6rmAa"
    },
    {
      name: "Riya Rashi",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=185pEpGvSy8MFwf3ShrZKCygCnUM_VtY1"
    },
    {
      name: "Barismita Singh",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1XYVtahN6jEyF_RnvopfwYABUCh7BoNRV"
    },
    {
      name: "Pratyusha Parida",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1l0tIbl5ROLpwmPK36G_OaE3sQK_DdFX_"
    },
    {
      name: "Mimansha Shekhar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1N6oktcyZZkbJ8hInitnlielabQs-zpKA"
    },
    {
      name: "Ishita  Arya",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1ecg1E6ZTwy7JNa-C9u_zfUffe9SyGkYM"
    },
    {
      name: "Ankita Singh",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1eurcuccBJ4QCMePy1Lpld_3srT1xrDcz"
    },
    {
      name: "Richa Ranjan",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1gp3RA5SOGuIVzDiRIwTIoZc-MOzn-Zw4"
    },
    {
      name: "Madhvendra Singh",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=19b_jOyUBXkgqZVZdO586SAggSRVMC4JZ"
    },
    {
      name: "Abhyarthna Sontakke ",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=14BskTTbdOKm00rwXHaO5217Xo3Et0QWo"
    },
    {
      name: "Sulagna Chatterjee",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=16Kbml9ufMogFvIQC6eqnD7vhYvluAA1-"
    },
    {
      name: "Subasish Kar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1w9cqkvddmMRtr8iRN5qfPcXFjPa_rUAr"
    },
    {
      name: "Shubhangi Srivastava",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1eGDC6mREdjr-TWcwlXsEuhGyEghLXRKd"
    },
    {
      name: "Arijit Maji",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1J35oAvXgrq_7JHtAaNdSD7czl_9YT6OE"
    },
    {
      name: "Priyadarshini Dey",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1f5xUXuCGlg9d4UhtYAj3gI2Q_CdzNSl-"
    },
    {
      name: "Ananya De",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1Rru84JecOuLKLW8zXqMLxF8EcJpFQG-A"
    },
    {
      name: "Shreya Banerjee",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=18LnkIwnowZAkaYP96yLxxzz6a-_S5Ikq"
    },
    {
      name: "Monica Kumari",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1I2tOAj9gFCakNfcdxF8TtdoRJDgmKvlC"
    },
    {
      name: "Srinjana Shandilya",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1eoF62yqhOoSKv5dv35D4FzI4uVL_EJnI"
    },
    {
      name: "Shivangi Bhardwaj",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1Q33z5jExWJ08hAN3PmGPIxLTpcjfu7uL"
    },
    {
      name: "Harsh Kejriwal ",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1NFJCwzRCARmSdbr3gK14BMgOmADvD4Is"
    },
    {
      name: "Arsalan Ahmad",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=16rbCCVc2WUexd2RLYIwg1agqMBWAgOVd"
    },
    {
      name: "Meghna Gupta",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=18pbH7zQMMF2wdcnyxFvxBBLZuHpP1QmQ"
    },
    {
      name: "Snehashree Sanghamitra ",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1s7y-mhBhNcakJ5GIr5Zl2BKBAAPquNQ-"
    },
    {
      name: "Suvannita Ganguly",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1vTHIFIqD0IWHsHch-ihNDdKgppWDtYxP"
    },
    {
      name: "Sweksha Sharma",
      society: "Desire Foundation",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1y1oA0P0OL_FmakuLF-LiY2OqzxkHMuP9"
    },
    {
      name: "Ankita Sarangi",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1Eya4hAAC6AqL0rtSLcHL3mkv8bAp_1-1"
    },
    {
      name: "Jyotsana",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1eZ9uzZsDEfj3bUASLxiHSue0K21JqXw6"
    },
    {
      name: "Aaishwarya Halder",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1fQ-APEuhGAihSH0eWI-vLw_sUpRCtePP"
    },
    {
      name: "Diksha Pranjali",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1fX4Rme6mKJYNRhU5aCLqRUGGXp_yHdfV"
    },
    {
      name: "Dhriti Goswami",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1Rzu1hYn2tXFg3kKErpLLtQ94QkP4QulO"
    },
    {
      name: "Soumyadeep Mandal",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1D61HWrlTFMk5Vc4hLbqs_-3MOLKu1Y_0"
    },
    {
      name: "Ritesh Kumar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1DVOELy-TTQ3fXipUeo0krT8kEnKHEt6k"
    },
    {
      name: "Stuti Pathak",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1pkxfHYA1c3qNIl6a5TI5DqUGOoutzZtm"
    },
    {
      name: "Ipsita Dash",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1XTN3HtabWWOWEUKTnvJ8vu9EdAsaD0Sy"
    },
    {
      name: "Sandali Khare",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1E92oRc18FOh4DLlGfQWbpK9k6zREAW28"
    },
    {
      name: "Shubhangi Rastogi",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=195ArcMzQwGpEvNqGRO1et5dI-p1Eo69Q"
    },
    {
      name: "Yash . ",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1i3CzUp2iS1aAvvedgJwdvfZp6KAXH-RE"
    },
    {
      name: "Priyanshu Sinha",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1HLIgeujIQvmIaM1zBXUPU4f3myW5m25Z"
    },
    {
      name: "Snigdha Khanna",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=10OkOX5Jz3UQa1cS-4uQg5x-BfMWeb5xt"
    },
    {
      name: "Shreeja Verma",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1rpgmYUQtAXISzaUI5OUl_ZoOcBZoNHzb"
    },
    {
      name: "Lekhansh Ruprela",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1AKIj4k2fRNUu21nlq8kIgYxgZ06Jk-yO"
    },
    {
      name: "Shubhkirti Gupta",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1z_J0vkSO322wj7cnCiHlxHYZG0Q5QQJW"
    },
    {
      name: "Tanisha Agarwal",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1VPgyrN_-ioWDN2GurJCl9zgGkZoW3lRO"
    },
    {
      name: "Ashish Kumar",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1wTsRoDVXZV-wkgmve1gBHe0j3LjlAX1J"
    },
    {
      name: "Chaitanya Mohan Sharma",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1mW-4mckCNoSZQVnXx3PfNmEsxZTh3IMD"
    },
    {
      name: "Khushi Kumari",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1IJYDRwWPbnvcXf9G-nZaIHXdJAC-PZ65"
    },
    {
      name: "Snehal Shreya Toppo",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1RsIY24sabOrD28CFDl9aKWHtuVvtWwDH"
    },
    {
      name: "Devansh Kashyap",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1iLKOaxR1xeUF7jrOqcm7iG5kMeoj8oRz"
    },
    {
      name: "Jyoti Prakash Dixit",
      society: "",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1f9jwOoEdJeaXwM23zbrB-EAXSLogmgRT"
    },
    {
      name: "Debrup Basu",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1muGmyikMg1dymCDNK__nij-0WoCrU9uU"
    },
    {
      name: "Navajita Singh",
      society: "TPH",
      "D": "Volunteer Team",
      image: "https://drive.google.com/thumbnail?id=1OaeVjSEVoToQzZ7u3Nzinpl-Q88pYvDq"
    }
  ]


  function shuffle(array) {
    var m = array.length, t, i;
  
    
    while (m) {
  
      
      i = Math.floor(Math.random() * m--);
  
      
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
  return (
    <>
    
      <div
        className="card dcard mb-5"
        style={{
          margin: "3% 15% 0 15%",
          boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.1)",
          borderRadius: "6px",
          border: "none",
        }}
      >
        <div className="card-body">
        <nav
            className="navbar navbar-expand-lg navbar-light mb-3"
            style={{ background: "#11698D", justifyContent: "center" }}
          >
            <span
              className="navbar-brand"
              style={{
                color: "white",
                fontSize: "medium",
              }}
            >
              Our Team
            </span>
          </nav>
          <h3 className="text-center mt-3">Volunteer Team</h3>
  <div className="row mt-5" style={{justifyContent:"center",textAlign:"center"}}>
    {volunteerTeam?shuffle(volunteerTeam).map((person)=>{
      return (
        <div className="col-md-3">
        <img src={person.image} alt="none" style={{width: "150px",height:"150px",borderRadius:"50%",objectFit:"cover",border: "5px solid #11698D", padding: "5px"}} />
        <h6 className="mt-3">{person.name} <br />
        {person.society}</h6>
      </div>
      )
    }):''} 
  </div>

        </div>
      </div>
    </>
  );
};

export default Homecard;
