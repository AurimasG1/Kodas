import DogCircle from './DogCircle'
export default function DogCircles({ dogs }) {
    // Create an array of objects with item and its length
    const itemsWithLength = dogs.map((item, index) => ({ name: item, length: item.length, index: index + 1 }));
  
    // Sort items by length in descending order
    const sortedByLength = itemsWithLength.sort((a, b) => b.length - a.length);
  
    return (
      <>
        {sortedByLength.map(item => (
          <DogCircle key={item.index} {...item} />
        ))}
      </>
    );
  };