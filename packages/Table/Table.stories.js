import Table from "./Table.vue";
import TableHead from "./TableHead.vue";
import TableHeader from "./TableHeader.vue";
import TableBody from "./TableBody.vue";
import TableRow from "./TableRow.vue";
import TableCell from "./TableCell.vue";

export default {
  title: "Design System/Table",
  component: { Table, TableHead, TableHeader, TableBody, TableRow, TableCell },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Table, TableHead, TableHeader, TableBody, TableRow, TableCell },
  template: `
<Table>
  <TableHead>
    <TableHeader> No </TableHeader>
    <TableHeader> Name </TableHeader>
    <TableHeader> Address </TableHeader>
  </TableHead>

  <TableBody>
    <TableRow>
      <TableCell> 1 </TableCell>
      <TableCell> Dimas Raka Septiawan </TableCell>
      <TableCell> Surabaya </TableCell>
    </TableRow>
  </TableBody>
</Table>
  `,
});

export const Default = Template.bind({});
