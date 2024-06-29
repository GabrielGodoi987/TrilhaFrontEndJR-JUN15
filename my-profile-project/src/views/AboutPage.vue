<script setup lang="ts">
import {ref} from 'vue';

interface CardsKnowMore {
  title: string;
  description: string;
  image: string;
}

const patternObject: CardsKnowMore = {
  title: "Mais sobre mim",
  description: 'Quero falar mais sobre mim nessa seção; motivação, hobbys e sobre programação. Clique nos cards para saber mais sobre cada tópico',
  image: 'https://assets.entrepreneur.com/content/3x2/2000/20150429160658-website-traffic.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380'
}

const cardsKnowMoreAboutMe: CardsKnowMore[] = [
  {
    title: 'Esportes',
    description: 'Desde pequeno pratico e sou apaixonado por esportes, gosto muito de futebol, desde pequeno tentei jogar profissionalmente esse era meu grande sonho de criança, joguei por alguns clubes como palmeiras, conrinthians e joguei por um tempo no nacional. Contudo em um dia tive uma lesão no joelho, que me impossibilitou de continuar o meu sonho. Infelizmente hoje pratico apenas musculação e pratico boxe',
    image: 'https://img.freepik.com/fotos-premium/jogador-de-futebol-menino-jogando-com-bola_132453-16777.jpg?w=1480'
  },
  {
    title: 'Programação',
    description: 'Conheci programação através da ETEC (Escola técnica de cursos de São Paulo), eu não tinha intensão alguma de fazer o curso, porém após fazer a prova vi que meu nome estava na lista de classificados, não hesitei e logo fui fazer minha matrícula, nas primeiras aulas eu pensei em desistir, contudo quando comecei a pegar o jeito fui me apaixonando a cada dia por esta área, estou aqui há dois anos',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*L5QyrMNalM3yhtgdgBcvkQ.png'
  },
  {
    title: 'Livros',
    description: 'Sou um ávido leitor. A leitura tem se feito presente todos os dias em minha vida, meus genêros preferiso são relacionados a programação, neurociência e qualquer livro relacionado a desenvolvimento pessoal ou relacionados a minha área.',
    image: 'https://rocketexpansion.com/wp-content/uploads/2022/02/website-for-a-book-b2.webp'
  },
  {
    title: 'Música',
    description: 'Amo escutar música em qualquer ocasião, sinto que ela muda meu sentimentos de acordo com o que eu esteja fazendo por isso acho de suma importância escolher uma boa música para treinar, estudar ou até mesmo limpar a casa e organizar minhas coisas.',
    image: 'https://t3.ftcdn.net/jpg/06/03/75/10/360_F_603751005_WqaPu1MMWNwCflXFTtkRunPo1bqQqMdF.jpg'
  }
]

const choiseData = ref<CardsKnowMore>(patternObject);

const updateChoiceData = (card: CardsKnowMore) => {
  choiseData.value = card;
}
</script>

<template>
  <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div class="flex flex-col lg:flex-row justify-between gap-8">
      <div class="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-primary-800 pb-4">{{ choiseData.title }}</h1>
        <p class="font-normal text-base leading-6 text-primary-800">{{ choiseData.description }}</p>
      </div>
      <div class="w-full lg:w-8/12">
        <img class="w-full h-full" :src="choiseData.image" :alt="choiseData.title"/>
      </div>
    </div>

    <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
      <div class="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-primary-800 pb-4"></h1>
        <p class="font-normal text-base leading-6 text-second-50 bg-second-500 text-center rounded-lg">Clique nos cards e veja mais sobre mim</p>
      </div>
      <div class="w-full lg:w-8/12 lg:pt-8">
        <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
          <div class="cursor-pointer p-4 pb-6 flex justify-center flex-col items-center"
               v-for="card in cardsKnowMoreAboutMe"
               :key="card.title"
               @click="updateChoiceData(card)">
            <img class="md:block hidden" :src="card.image" :alt="card.title"/>
            <p class="font-medium text-xl leading-5 text-primary-800 mt-4">{{ card.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
