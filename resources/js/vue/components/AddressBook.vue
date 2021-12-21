<template>
  <div>
    <table class="w-3/5 ml-20 shadow-lg divide-y divide-gray-200 border-gray-300 border-1">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            Phone
          </th>
          <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            Address
          </th>
          <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="contact in contacts" :key="contact.id" class="even:bg-gray-100">
          <td class="pl-6 py-5 whitespace-nowrap text-md text-gray-700 tracking-wide">
            <div>{{contact.name}}</div>
          </td>
          <td class="pl-6 py-5 whitespace-nowrap text-md text-gray-700 tracking-wide">
            <div>{{contact.email}}</div>
          </td>
          <td class="pl-6 py-5 whitespace-nowrap text-md text-gray-700 tracking-wide">
            <div>{{contact.phoneNumber}}</div>
          </td>
          <td class="pl-6 py-5 whitespace-nowrap text-md text-gray-700 tracking-wide">
            <div>{{contact.physicalAddress}}</div>
          </td>
          <td class="pl-6 py-5 whitespace-nowrap text-md text-gray-700 tracking-wide">
            <div>Action</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AddressBook",
  props: {
    contacts: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>
