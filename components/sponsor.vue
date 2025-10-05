<template>
  <div class="px-3 sm:px-4 py-2 rounded-xl sponsor-table-wrapper">
    <table class="my-0 w-full">
      <tbody>
        <tr class="text-start">
          <th class="py-2 px-2 font-semibold">Name</th>
          <th class="py-2 px-2 font-semibold">Amount</th>
          <th class="py-2 px-2 font-semibold">Date</th>
        </tr>
        <tr v-for="sponsor in sponsors" :key="`${sponsor.name}-${sponsor.date}`" class="border-t">
          <td class="py-2 px-2">{{ sponsor.name }}</td>
          <td class="py-2 px-2">{{ sponsor.amount }}</td>
          <td class="py-2 px-2">{{ sponsor.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
interface Sponsor {
  name: string
  amount: string
  date: string
}

const sponsors: Sponsor[] = [
  { name: 'Electron Dragon', amount: '5.2', date: '2025-05-03' },
  { name: '匿名 Sponsor', amount: '2.0', date: '2025-04-15' },
  { name: '匿名 Sponsor', amount: '1.0', date: '2025-03-05' },
  { name: '匿名 Sponsor', amount: '5.2', date: '2025-03-01' },
  { name: '匿名 Sponsor', amount: '0.2', date: '2025-02-19' },
  { name: '匿名 Sponsor', amount: '1.8', date: '2025-01-24' }
]
</script>

<style scoped>
.sponsor-table-wrapper {
  border: 1px dashed rgba(0, 0, 0, 0.25);
}

table {
  border-collapse: collapse;
}

th, td {
  text-align: left;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
}

th {
  border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
}

tr:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.dark .sponsor-table-wrapper {
  border: 1px dashed rgba(255, 255, 255, 0.3);
}

.dark th, 
.dark td {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.25);
}

.dark th {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.35);
}

.dark tr:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
