export const useMetadata = async () => {
    const metadata = useState('metadata', () => null);
    if (!metadata.value) {
        metadata.value = await $fetch('/data/metadata.json');
    }
    return metadata;
}
