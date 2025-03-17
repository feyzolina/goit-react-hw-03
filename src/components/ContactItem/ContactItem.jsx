import styles from "./ContactItem.module.css";

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.item}>
      {contact.name}: {contact.number}
      <button className={styles.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
